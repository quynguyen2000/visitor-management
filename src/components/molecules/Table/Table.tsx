import React, { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Table as AntdTable } from 'antd';
import './Table.scss';
import { Pagination } from '@app/components/atoms';
import { PaginateOptions } from '@app/interfaces';

interface TableProps {
  columns: ColumnsType<any>;
  dataSource: [];
  disablePaginate?: boolean;
  scroll?: boolean;
  loading?: boolean;
  paginate?: PaginateOptions;
}
const Table: React.FC<TableProps> = ({
  columns,
  dataSource,
  disablePaginate,
  scroll,
  loading,
  paginate,
}) => {
  return (
    <div className='default-table'>
      <AntdTable
        loading={loading}
        pagination={false}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: scroll ? 1500 : '', y: scroll ? 300 : '' }}
      />
      {disablePaginate !== true && paginate && <Pagination paginate={paginate} />}
    </div>
  );
};

export default Table;
