import { AppstoreOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Col, Layout } from 'antd';
import React, { Fragment, Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { SpinLoading } from '@app/components/atoms';
import ProtectedRoute from '../ProtectedRoute';

import HeaderComponent from '@app/components/molecules/Header/Header';
import { SideBar } from '../../molecules/SideBar/SideBar';
import './PrivateLayout.scss';

import { useTranslation } from 'react-i18next';

const { Content } = Layout;

export interface IMenuItem {
  key: string;
  icon: React.ReactNode;
  label: string;
  children?: IMenuItem[];
}

const PrivateLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState<string | string[]>('');

  const IMenu: IMenuItem[] = [
    {
      key: 'unknowns',
      icon: <AppstoreOutlined />,
      label: `${t('SEDER.UNKNOWNS')}`,
    },
    {
      key: 'staffs',
      icon: <UsergroupAddOutlined />,
      label: `${t('SEDER.STAFF')}`,
    },
  ];

  return (
    <>
      <Fragment>
        <Layout>
          <SideBar
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            IMenu={IMenu}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <Layout className='site-layout'>
            <HeaderComponent
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              IMenu={IMenu}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
            <Content className='content'>
              <Suspense fallback={<SpinLoading />}>
                <ProtectedRoute>
                  <Col className='outlet-layout'>
                    <Outlet />
                  </Col>
                </ProtectedRoute>
              </Suspense>
            </Content>
          </Layout>
        </Layout>
      </Fragment>
    </>
  );
};

export default PrivateLayout;
