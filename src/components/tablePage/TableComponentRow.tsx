import { Table } from '@devexpress/dx-react-grid-material-ui';
import React from 'react';

import { variables } from 'styled/variables';

export const TableComponentRow = (props: any) => {
    return (
        <Table.Row
            {...props}
            style={{
                backgroundColor:
                    props.tableRow.rowId % 2 === 0
                        ? variables.color.secondary
                        : variables.color.actionBg
            }}
        />
    );
};
