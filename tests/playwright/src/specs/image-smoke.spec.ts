/**********************************************************************
 * Copyright (C) 2023-2024 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import path from 'node:path';

import type { Page } from '@playwright/test';
import { expect as playExpect, test } from '@playwright/test';

import { ImageDetailsPage } from '../model/pages/image-details-page';
import type { ImagesPage } from '../model/pages/images-page';
import { WelcomePage } from '../model/pages/welcome-page';
import { NavigationBar } from '../model/workbench/navigation';
import { PodmanDesktopRunner } from '../runner/podman-desktop-runner';
import { handleConfirmationDialog } from '../utility/operations';
import { waitForPodmanMachineStartup } from '../utility/wait';

let pdRunner: PodmanDesktopRunner;
let page: Page;
let navBar: NavigationBar;
const helloContainer = 'quay.io/podman/hello';
const imageList = ['quay.io/podman/image1', 'quay.io/podman/image2'];

test.beforeAll(async () => {
  pdRunner = new PodmanDesktopRunner();
  page = await pdRunner.start();
  pdRunner.setVideoAndTraceName('pull-image-e2e');

  const welcomePage = new WelcomePage(page);
  await welcomePage.handleWelcomePage(true);
  await waitForPodmanMachineStartup(page);
  navBar = new NavigationBar(page);
});

test.afterAll(async () => {
  await pdRunner.close();
});

test.describe.serial('Image workflow verification', () => {
  async function pullImageByName(imageName: string): Promise<ImagesPage> {
    let imagesPage = await navBar.openImages();
    const pullImagePage = await imagesPage.openPullImage();
    imagesPage = await pullImagePage.pullImage(imageName);
    await imagesPage.waitForImageExists(imageName);
    return imagesPage;
  }

  test('Pull image', async () => {
    const imagesPage = await navBar.openImages();
    await playExpect(imagesPage.heading).toBeVisible();

    const pullImagePage = await imagesPage.openPullImage();
    const updatedImages = await pullImagePage.pullImage(helloContainer);

    const exists = await updatedImages.waitForImageExists(helloContainer);
    playExpect(exists, `${helloContainer} image not present in the list of images`).toBeTruthy();
    playExpect(await updatedImages.getCurrentStatusOfImage(helloContainer)).toBe('UNUSED');
  });

  test('Test navigation between pages', async () => {
    const imagesPage = await navBar.openImages();
    const imageDetailPage = await imagesPage.openImageDetails(helloContainer);
    await playExpect(imageDetailPage.heading).toBeVisible();
    await imageDetailPage.backLink.click();
    await playExpect(imagesPage.heading).toBeVisible();

    await imagesPage.openImageDetails(helloContainer);
    await playExpect(imageDetailPage.heading).toBeVisible();
    await imageDetailPage.closeButton.click();
    await playExpect(imagesPage.heading).toBeVisible();
  });

  test('Check image details', async () => {
    const imagesPage = await navBar.openImages();
    const imageDetailPage = await imagesPage.openImageDetails(helloContainer);

    await playExpect(imageDetailPage.summaryTab).toBeVisible();
    await playExpect(imageDetailPage.historyTab).toBeVisible();
    await playExpect(imageDetailPage.inspectTab).toBeVisible();
  });

  test('Rename image', async () => {
    const imageDetailsPage = new ImageDetailsPage(page, helloContainer);
    const editPage = await imageDetailsPage.openEditImage();
    const imagesPage = await editPage.renameImage('quay.io/podman/hi');
    playExpect(await imagesPage.waitForImageExists('quay.io/podman/hi')).toBe(true);
  });

  test('Delete image', async () => {
    const imagesPage = await pullImageByName(helloContainer);
    playExpect(await imagesPage.waitForImageExists(helloContainer)).toBe(true);

    const imageDetailPage = await imagesPage.openImageDetails(helloContainer);
    await playExpect(imageDetailPage.deleteButton).toBeVisible();
    await imageDetailPage.deleteButton.click();
    await handleConfirmationDialog(page);

    const imageDeleted = await imagesPage.waitForImageDelete(helloContainer);
    playExpect(imageDeleted).toBe(true);
    playExpect(await imagesPage.waitForImageExists('quay.io/podman/hi')).toBe(true);
  });

  test('Build image', async () => {
    let imagesPage = await navBar.openImages();
    await playExpect(imagesPage.heading).toBeVisible();

    const buildImagePage = await imagesPage.openBuildImage();
    await playExpect(buildImagePage.heading).toBeVisible();
    const dockerfilePath = path.resolve(__dirname, '..', '..', 'resources', 'test-containerfile');
    const contextDirectory = path.resolve(__dirname, '..', '..', 'resources');

    imagesPage = await buildImagePage.buildImage('build-image-test', dockerfilePath, contextDirectory);
    playExpect(await imagesPage.waitForImageExists('docker.io/library/build-image-test')).toBeTruthy();

    const imageDetailsPage = await imagesPage.openImageDetails('docker.io/library/build-image-test');
    await playExpect(imageDetailsPage.heading).toBeVisible();
    imagesPage = await imageDetailsPage.deleteImage();
    playExpect(await imagesPage.waitForImageDelete('docker.io/library/build-image-test')).toBeTruthy();
  });

  test('Prune images', async () => {
    test.setTimeout(150000);

    const imagesPage = await navBar.openImages();
    await playExpect(imagesPage.heading).toBeVisible();

    for (const image of imageList) {
      await imagesPage.pullImage(helloContainer);
      await playExpect(imagesPage.heading).toBeVisible();
      await playExpect.poll(async () => await imagesPage.waitForImageExists(helloContainer)).toBeTruthy();

      await imagesPage.renameImage(helloContainer, image);
      await playExpect(imagesPage.heading).toBeVisible();
      await playExpect.poll(async () => await imagesPage.waitForImageExists(image)).toBeTruthy();
    }

    await imagesPage.pruneImages();
    await playExpect(imagesPage.heading).toBeVisible();

    for (const image of imageList) {
      await playExpect.poll(async () => await imagesPage.waitForImageDelete(image, 60000), { timeout: 0 }).toBeTruthy();
    }
  });
});
