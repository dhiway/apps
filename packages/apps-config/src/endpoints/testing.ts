// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types';


/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   value: The actual hosted secure websocket endpoint
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const testChains: EndpointOption[] = [
  {
      info: 'Amber Glow',
      text: 'Amber Glow (v2 Staging)',
      providers: {
        'Cord Network': 'wss://staging.cord.network'
      }
    },
    {
      info: 'Sparknet',
      text: 'BuilderNet (CORD v2)',
      providers: {
        'Cord Network': 'wss://sparknet.cord.network'
      }
    },
];
