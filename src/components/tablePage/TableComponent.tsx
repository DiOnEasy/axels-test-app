import {
    IntegratedPaging,
    IntegratedSorting,
    PagingState,
    SortingState
} from '@devexpress/dx-react-grid';
import {
    Grid,
    PagingPanel,
    Table,
    TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';
import React from 'react';

import Paper from '@mui/material/Paper';
import { TableComponentCell } from 'components/tablePage/TableComponentCell';
import { TableComponentRow } from 'components/tablePage/TableComponentRow';

const columns = [
    { name: 'id', title: 'ID' },
    { name: 'product', title: 'Product' },
    { name: 'owner', title: 'Owner' }
];
const rows = [
    { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
    { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
    { id: 2, product: 'React Grid', owner: 'React Inc.' },
    { id: 3, product: 'Angular UI Components', owner: 'Google' },
    { id: 4, product: 'DevExpress Dashboard', owner: 'DevExpress' },
    { id: 5, product: 'WinForms UI Controls', owner: 'Microsoft' },
    { id: 6, product: 'ASP.NET Web Forms Controls', owner: 'Microsoft' },
    { id: 7, product: 'CodeRush', owner: 'DevExpress' },
    { id: 8, product: 'TestCafe', owner: 'DevExpress' },
    { id: 9, product: 'DevExpress Reporting', owner: 'DevExpress' },
    { id: 10, product: 'Visual Studio Code', owner: 'Microsoft' },
    { id: 11, product: 'GitHub', owner: 'Microsoft' },
    { id: 12, product: 'Google Analytics', owner: 'Google' },
    { id: 13, product: 'Firebase', owner: 'Google' },
    { id: 14, product: 'Chrome', owner: 'Google' },
    { id: 15, product: 'Edge', owner: 'Microsoft' },
    { id: 16, product: 'Safari', owner: 'Apple' },
    { id: 17, product: 'iCloud', owner: 'Apple' },
    { id: 18, product: 'Xcode', owner: 'Apple' },
    { id: 19, product: 'macOS', owner: 'Apple' },
    { id: 20, product: 'Windows', owner: 'Microsoft' },
    { id: 21, product: 'Azure', owner: 'Microsoft' },
    { id: 22, product: 'AWS', owner: 'Amazon' },
    { id: 23, product: 'Prime Video', owner: 'Amazon' },
    { id: 24, product: 'Kindle', owner: 'Amazon' },
    { id: 25, product: 'YouTube', owner: 'Google' },
    { id: 26, product: 'Gmail', owner: 'Google' },
    { id: 27, product: 'Outlook', owner: 'Microsoft' },
    { id: 28, product: 'Office 365', owner: 'Microsoft' },
    { id: 29, product: 'OneDrive', owner: 'Microsoft' }
];

export const TableComponent = () => {
    return (
        <Paper>
            <Grid rows={rows} columns={columns}>
                <SortingState />
                <PagingState defaultCurrentPage={0} pageSize={6} />
                <IntegratedSorting />
                <IntegratedPaging />
                <PagingPanel />
                <Table
                    columnExtensions={columns.map((column) => ({
                        columnName: column.name,
                        align: 'center'
                    }))}
                    cellComponent={TableComponentCell}
                    rowComponent={TableComponentRow}
                />
                <TableHeaderRow showSortingControls />
            </Grid>
        </Paper>
    );
};

const clown = () => {
    const aga = ['sdkfjsldfjdkl', 'kldsjf'];
    aga.map((a) => {
        console.log(a)
        
    })

};
