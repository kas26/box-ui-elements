/** @flow */
import * as React from 'react';

import type { CellData } from '../flowTypes';

import '../styles/MetadataViewCell.scss';

type Props = {
    cellData: CellData,
};

const StringCell = ({ cellData }: Props) => {
    return (
        <div className="cell-container">
            <span>{cellData.cellData}</span>
        </div>
    );
};

export default StringCell;
