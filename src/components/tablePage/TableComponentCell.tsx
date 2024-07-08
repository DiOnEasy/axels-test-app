import { Table } from '@devexpress/dx-react-grid-material-ui';
import React from 'react';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { variables } from 'styled/variables';

export const TableComponentCell = (props: any) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(props.value);
    };
    return (
        <Table.Cell
            {...props}
            style={{
                color:
                    props.column.name === 'owner' &&
                    props.row.owner === 'DevExpress'
                        ? variables.color.white
                        : undefined,
                border: '1px solid black'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <span>{props.value}</span>
                {props.column.name !== 'id' && (
                    <span onClick={handleCopy}>
                        <ContentCopyIcon
                            sx={{ fontSize: '15px', cursor: 'pointer' }}
                        />
                    </span>
                )}
            </div>
        </Table.Cell>
    );
};
