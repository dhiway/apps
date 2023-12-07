// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { getTeleports } from './util.js';
import { cordIcon } from './icon-svg.js'
// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodParasKusama: Omit<EndpointOption, 'teleport'>[] = [
  // {
  //   homepage: 'https:cord.network',
  //   info: 'aband',
  //   paraId: 2257,
  //   providers: {
  //     // 'Aband DAO': 'wss://rpc-parachain.a.band' // https://github.com/polkadot-js/apps/issues/9334
  //   },
  //   text: 'Amber Glow (v2 Staging)',
  //   ui: {
  //     color: '#7358ff',
  //     logo: chainsAbandPNG
  //   }
  // },

  {
    homepage: 'https:cord.network',
    info: 'Amber glow',
    paraId: 2124,
    providers: {
      'CORD Network': 'wss://sprintnet.cord.network/',
    },
    text: 'Sprintnet (v2 staging)',
    ui: {
      color: '#40172F',
      logo: cordIcon
    }
  },
  {
    homepage: 'https://cord.network/',
    info: 'Sparknet',
    paraId: 2088,
    providers: {
      'Sparknet':"wss://sparknet.cord.network/",
    },
    text: 'Sparknet',
    ui: {
      color: '#40172F',
      logo: cordIcon
    }
  },
    {
    homepage: 'https://cord.network/',
    info: 'Confidex Alpha',
    paraId: 2088,
    providers: {
      'Confidex':"wss://confidex-alpha1.cord.network/",
    },
    text: 'Confidex',
    ui: {
      color: '#40172F',
      logo: cordIcon
    }
  },
      {
    homepage: 'https://cord.network/',
    info: 'NPCI',
    paraId: 2088,
    providers: {
      'NPCI':"wss://asset-token.cord.network/",
    },
    text: 'NPCI',
    ui: {
      color: '#40172F',
      logo: cordIcon
    }
  },
];

export const prodParasKusamaCommon: EndpointOption[] = [
  
];

export const prodRelayKusama: EndpointOption = {
  // dnslink: 'kusama',
  // genesisHash: KUSAMA_GENESIS,
  // info: 'kusama',
  linked: [
    ...prodParasKusamaCommon,
    ...prodParasKusama
  ],
  providers: {
  },
  teleport: getTeleports(prodParasKusamaCommon),
  text: 'CORD network',
  ui: {
    color: '#000000',
    identityIcon: 'polkadot',
    logo: cordIcon
  }
};
