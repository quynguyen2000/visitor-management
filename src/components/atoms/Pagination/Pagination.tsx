import React from 'react';
import { Pagination as PaginationAntd } from 'antd';

import { PaginateOptions } from '@app/interfaces';
import { useTranslation } from 'react-i18next';
import './Pagination.scss';

interface Props {
  paginate: PaginateOptions;
}

export const Pagination: React.FC<Props> = ({ paginate }) => {
  const { t } = useTranslation();

  const renderTotal = (total: number) => {
    return t('TABLE.PAGE_TOTAL', { total: total });
  };

  return (
    <div className='customer-pagination'>
      <PaginationAntd
        showSizeChanger
        pageSizeOptions={[50, 100, 150, 200]}
        current={paginate.table.page}
        pageSize={paginate.table.size}
        total={paginate.total}
        onChange={(page: number, pageSize: number) =>
          paginate.setTable({ ...paginate.table, page: page, size: pageSize })
        }
        showTotal={renderTotal}
      />
    </div>
  );
};
