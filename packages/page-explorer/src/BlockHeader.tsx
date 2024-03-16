/* eslint-disable header/header */
// Copyright 2017-2023 @polkadot/app-explorer authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HeaderExtended } from '@polkadot/api-derive/types';
import type { BlockNumber } from '@polkadot/types/interfaces';

import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { AddressSmall, Icon } from '@polkadot/react-components';
import { formatNumber } from '@polkadot/util';

interface Props {
  value: HeaderExtended;
  bestNumberFinalized?: BlockNumber;
}

function BlockHeader ({ bestNumberFinalized, value }: Props): React.ReactElement<Props> | null {
  const isFinalized = useMemo(() => {
    return bestNumberFinalized && bestNumberFinalized.toNumber() >= value.number.toNumber();
  },
  [bestNumberFinalized, value]
  );

  // function BlockHeader ({ value }: Props): React.ReactElement<Props> | null {
  //   if (!value) {
  //     return null;
  //   }

  const hashHex = value.hash.toHex();

  return (
    <tr>
      <td className='number'>
        <h4 className='--digits'>
          <Link to={`/explorer/query/${hashHex}`}>{formatNumber(value.number)}</Link>
        </h4>
      </td>
      <td className='all hash overflow'>{hashHex}</td>
      <td className='address'>
        {value.author && (
          <AddressSmall value={value.author} />
        )}
      </td>
      <td className='finalizedIcon'>
        {isFinalized
          ? <Icon
            className='highlight--finalized--color'
            icon='circle-check'
          />
          : null}
      </td>
    </tr>
  );
}

export default React.memo(BlockHeader);
