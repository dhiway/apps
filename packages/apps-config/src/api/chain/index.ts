// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

import cord from './kilt';

const chain: Record<string, OverrideBundleDefinition> = {
 'Sparknet': cord['Sparknet']
};

export default chain;
