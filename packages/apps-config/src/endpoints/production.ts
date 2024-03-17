// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { cordIcon } from './icon-svg.js';
import { getTeleports } from './util.js';

export * from './liveNetworks.js';
export * from './testNetworks.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodParasRB: Omit<EndpointOption, 'teleport'>[] = [
  {
    homepage: 'https://cord.network/',
    info: 'Royal Blue',
    paraId: 2000,
    providers: {
      'Production (v1)': 'wss://royal-blue.dway.io/'
    },
    text: 'Royal Blue',
    ui: {
      color: '#40172F',
      logo: cordIcon
    }
  }
];

export const prodParasRBCommon: EndpointOption[] = [

];

export const prodChains: EndpointOption = {
  // dnslink: 'kusama',
  // genesisHash: KUSAMA_GENESIS,
  // info: 'kusama',
  linked: [
    ...prodParasRBCommon,
    ...prodParasRB
  ],
  providers: {
  },
  teleport: getTeleports(prodParasRBCommon),
  text: 'CORD network',
  ui: {
    color: '#000000',
    identityIcon: 'polkadot',
    logo: cordIcon
  }
};
