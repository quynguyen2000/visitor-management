import React from 'react';

import { Breadcrumb, IBreadcrumbItem } from '@app/components/molecules/Breadcrumb/Breadcrumb';
import './Staff.scss';

const Staff: React.FC = () => {
  const breadcrumbItems: IBreadcrumbItem[] = [{ key: 'staffs' }];

  return (
    <div className='staff-container'>
      <Breadcrumb items={breadcrumbItems} />
      <iframe src='https://hrm-stunited.netlify.app'></iframe>
    </div>
  );
};

export default Staff;
