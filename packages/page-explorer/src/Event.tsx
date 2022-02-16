// Copyright 2017-2021 @polkadot/app-explorer authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EventRecord } from '@polkadot/types/interfaces';

import React from 'react';

import { Event as EventDisplay, Expander } from '@polkadot/react-components';

interface Props {
  className?: string;
  value: EventRecord;
}

function Event ({ className = '', value: { event } }: Props): React.ReactElement<Props> {
  let summary = `${event.section}.${event.method}`;
  if (event.section === 'product' && event.method === 'TxList')
      summary = 'item.addToCatalog';
  if (event.section === 'product' && event.method === 'TxOrder')
      summary = 'item.confirmOrder';
  return (
    <Expander
      className={className}
      summary={summary}
      summaryMeta={event.meta}
    >
      <EventDisplay
        className='details'
        value={event}
      />
    </Expander>
  );
}

export default React.memo(Event);
