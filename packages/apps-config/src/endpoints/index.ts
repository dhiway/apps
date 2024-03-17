// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction, TOptions } from '../types.js';
import type { LinkOption } from './types.js';

import { createCustom, createDev, createOwn } from './development.js';
import { prodChains } from './productionCord.js';
import { stagingChains } from './testingCord.js';
import { expandEndpoints } from './util.js';

export { CUSTOM_ENDPOINT_KEY } from './development.js';
export * from './productionCord.js';
export * from './testingCord.js';

function defaultT (keyOrText: string, text?: string | TOptions, options?: TOptions): string {
  return (
    (options?.replace?.host as string) ||
    text?.toString() ||
    keyOrText
  );
}

export function createWsEndpoints (t: TFunction = defaultT, firstOnly = false, withSort = true): LinkOption[] {
  return [
    ...createCustom(t),
    {
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.live', 'Live Networks', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    },
    ...expandEndpoints(t, prodChains, firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      text: t('test', 'TEST NETWORKS', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    },
    ...expandEndpoints(t, stagingChains, firstOnly, withSort),
    {
      isDevelopment: true,
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.dev', 'Development', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    },
    ...createDev(t),
    ...createOwn(t)
  ].filter(({ isDisabled }) => !isDisabled);
}
