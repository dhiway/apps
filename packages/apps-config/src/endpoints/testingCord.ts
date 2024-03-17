/* eslint-disable header/header */
// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { cordIcon } from './icon-svg.js';

export const stagingChains: Omit<EndpointOption, 'teleport'>[] = [
  {
    homepage: 'https:cord.network',
    info: 'Sprintnet',
    providers: {
      Dhiway: 'wss://sprintnet.cord.network/'
    },
    text: 'Sprintnet (devnet)',
    ui: {
      color: '#40172F',
      logo: cordIcon
    }
  },
  {
    homepage: 'https://cord.network/',
    info: 'Sparknet',
    providers: {
      Dhiway: 'wss://sparknet.cord.network/'
    },
    text: 'Sparknet (staging)',
    ui: {
      color: '#40172F',
      logo: cordIcon
    }
  },
  {
    homepage: 'https://cord.network/',
    info: 'Confidex',
    providers: {
      Confidex: 'wss://confidex-alpha1.cord.network/'
    },
    text: 'Confidex (staging)',
    ui: {
      color: '#40172F',
      logo: cordIcon
    }
  },
  {
    homepage: 'https://cord.network/',
    info: 'NPCI',
    providers: {
      Dhiway: 'wss://asset-token.cord.network/'
    },
    text: 'NPCI (staging)',
    ui: {
      color: '#40172F',
      logo: cordIcon
    }
  }
];
