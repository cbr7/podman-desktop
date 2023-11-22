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

import { writable, type Writable } from 'svelte/store';
import { EventStore } from './event-store';
import { getKubeUIContexts, type KubeContextUI } from '../lib/kube/KubeContextUI';

const windowEvents: string[] = ['extensions-started', 'kubernetes-context-update'];
const windowListeners = ['extensions-already-started'];

// Do not update until all extensions are started (since we want to make sure kube-context has been loaded)
let readyToUpdate = false;
export async function checkForUpdate(eventName: string): Promise<boolean> {
  if ('extensions-already-started' === eventName) {
    readyToUpdate = true;
  }

  // do not fetch until extensions are all started
  return readyToUpdate;
}

export const kubernetesContexts: Writable<KubeContextUI[]> = writable([]);

const eventStore = new EventStore<KubeContextUI[]>(
  'kubernetes contexts',
  kubernetesContexts,
  checkForUpdate,
  windowEvents,
  windowListeners,
  grabKubernetesContexts,
);
eventStore.setup();

export async function grabKubernetesContexts(): Promise<KubeContextUI[]> {
  // Retrieve both the contexts and clusters
  const k8sContexts = await window.kubernetesGetContexts();
  const k8sClusters = await window.kubernetesGetClusters();

  // Convert them to KubeContextUI so we can safely render them.
  return getKubeUIContexts(k8sContexts, k8sClusters);
}
