import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import { Avatar, Modal as AntdModal, Space, Typography } from 'antd';

import './Modal.scss';
import { ReactNode } from 'react';

interface Props {
  children?: React.ReactNode;
  open: boolean;
  title: string;
  name?: string;
  icon?: ReactNode;
  footer?: boolean | React.ReactNode;
  setOpen: (arg: boolean) => void;
}

export const Modal: React.FC<Props> = ({ children, open, title, name, icon, footer, setOpen }) => {
  const modalIcon = icon ?? <UserOutlined />;
  return (
    <>
      <AntdModal
        title={
          <Space style={{ fontWeight: 700, fontSize: '18px', paddingLeft: '24px' }}>
            {modalIcon}
            <Typography.Text style={{ fontWeight: 700, fontSize: '18px' }}>{title}</Typography.Text>
          </Space>
        }
        centered
        open={open}
        onOk={() => setOpen(false)}
        footer={footer ?? false}
        onCancel={() => setOpen(false)}
        className={`modal${name ? '-' + name : ''}`}
      >
        {children}
      </AntdModal>
    </>
  );
};
