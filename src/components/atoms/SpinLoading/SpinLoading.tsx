import { Spin, SpinProps } from 'antd';
import React from 'react';

import './SpinLoading.scss';
import { SpinSize } from 'antd/es/spin';

type Props = {
  size?: SpinSize;
} & SpinProps;

export const SpinLoading: React.FC<Props> = ({ size }) => {
  return (
    <div className={`${size ? size + '-' : ''}spin`}>
      <Spin size={size ? size : 'large'} />
    </div>
  );
};
