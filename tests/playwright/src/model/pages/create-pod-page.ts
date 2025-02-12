/**********************************************************************
 * Copyright (C) 2023 Red Hat, Inc.
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

import { type Locator, type Page, test } from '@playwright/test';

import { BasePage } from './base-page';
import { PodsPage } from './pods-page';

export class CreatePodsPage extends BasePage {
  readonly heading: Locator;
  readonly closeLink: Locator;
  readonly podNameBox: Locator;
  readonly closeButton: Locator;
  readonly createPodButton: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = this.page.getByRole('heading', {
      name: 'Copy containers to a pod',
    });
    this.closeLink = this.page.getByRole('link', { name: 'Close' });
    this.podNameBox = this.page.getByRole('textbox', { name: 'Pod name' });
    this.closeButton = this.page.getByRole('button', { name: 'Close' });
    this.createPodButton = this.page.getByRole('button', {
      name: 'Create Pod',
    });
  }

  async createPod(podName: string): Promise<PodsPage> {
    return test.step(`Create pod ${podName}`, async () => {
      await this.podNameBox.fill(podName);
      await this.createPodButton.click();
      return new PodsPage(this.page);
    });
  }
}
