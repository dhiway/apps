// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { cordIcon } from './icon-svg.js';

export const prodChains: Omit<EndpointOption, 'teleport'>[] = [
  {
    homepage: 'https://cord.network/',
    info: 'Royal Blue',
    providers: {
      Dhiway: 'wss://royal-blue.dway.io/'
    },
    text: 'Royal Blue',
    ui: {
      color: '#40172F',
      identityIcon: 'polkadot',
      logo: cordIcon
    }
  },
  {
    homepage: 'https://cord.network/',
    info: 'X One - Protean',
    providers: {
      Protean: 'wss://network.proteanx.io/'
    },
    text: 'X One - Protean',
    ui: {
      color: '#40172F',
      identityIcon: 'polkadot',
      logo: cordIcon
    }
  }
];
