import React from 'react';
import { CDataTable } from '@coreui/react';

type CoreUIDataTableProps<T, M> = {
    data: Array<T>;
    fields: Array<M>;
};
const CoreUIDataTable = ({ data, fields, actions, loading }) => {
    return (
        <div>
            <CDataTable
                items={data}
                fields={fields}
                tableFilter={{ placeholder: 'Search Table' }}
                itemsPerPage={10}
                hover
                header
                loading={loading}
                // sorter
                pagination
                scopedSlots={actions && actions}
            />
        </div>
    );
};

export default CoreUIDataTable;
