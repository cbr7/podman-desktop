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

import { Runner } from '../runner/podman-desktop-runner';

async function globalSetup(): Promise<void> {
  if (process.env.USE_GLOBAL_RUNNER === 'true') {
    await Runner.getInstance();
    console.log('Global setup - Runner instance created');
  } else {
    console.log('Global setup - skipped due to environment variable');
  }
}

export default globalSetup;
