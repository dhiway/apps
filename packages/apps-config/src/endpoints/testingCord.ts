/* eslint-disable header/header */
// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { cordIcon } from './icon-svg.js';

export const stagingChains: Omit<EndpointOption, 'teleport'>[] = [
/* {
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
  },*/
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
    info: 'Confidex-Alpha',
    providers: {
      Confidex: 'wss://confidex-alpha.cord.network/'
    },
    text: 'Confidex Alpha (staging)',
    ui: {
      color: '#5097fF',
      logo: cordIcon
    }
  },
  {
    homepage: 'https://cord.network/',
    info: 'Finternet-Alpha',
    providers: {
      Finternet: 'wss://finternet-alpha.cord.network/'
    },
    text: 'Finternet Alpha (staging)',
    ui: {
      color: '#20070F',
      logo: cordIcon
    }
  }
];
