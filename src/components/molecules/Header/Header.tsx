import {
  BellOutlined,
  ExportOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { notificationInfo } from '@app/components/atoms';
import { setRefresh } from '@app/redux/features/notification/notifySlice';
import { RootState } from '@app/redux/store';
import { Avatar, Badge, Col, Dropdown, Layout, Menu, Row, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onMessage } from 'firebase/messaging';
import './Header.scss';

function HeaderComponent(props: any) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { unRead } = useSelector((state: RootState) => state.notify);

  const [notifications, setNotifications] = useState<number>(0);

  const handleClickMenu = (item: string) => {
    switch (item) {
      case 'notifications':
        props.setCollapsed(false);
        navigate('/');
        break;
      default:
        props.setActiveItem(item);
        props.setCollapsed(!props.collapsed);
        break;
    }
  };

  const menu = (
    <Menu>
      <Menu.Item
        key='1'
        icon={<UserOutlined style={{ color: '#023E8A', fontSize: '16px' }} />}
        onClick={() => navigate('/profile')}
      >
        {t('HEADER.PROFILE')}
      </Menu.Item>
      <Menu.Item key='2' icon={<ExportOutlined style={{ color: '#0077B6', fontSize: '16px' }} />}>
        {t('HEADER.LOGOUT')}
      </Menu.Item>
    </Menu>
  );

  const avatar_size = {
    xs: 35,
    sm: 45,
    md: 45,
    lg: 45,
    xl: 45,
    xxl: 45,
  };

  useEffect(() => {
    if (unRead > 0) {
      setNotifications(unRead);
    }
    setNotifications(unRead);
  }, [unRead]);

  return (
    <>
      <Layout.Header className='header-container'>
        <Row className='header-container'>
          <Col
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            onClick={() => props.setCollapsed(!props.collapsed)}
          >
            {!props.collapsed ? (
              <MenuFoldOutlined className='collapsed' />
            ) : (
              <MenuUnfoldOutlined className='collapsed' />
            )}
          </Col>
          <Col xs={17} sm={17} md={17} lg={17} xl={17} className='badge-card'>
            <Badge count={notifications > 0 ? notifications : 0}>
              <BellOutlined className='notify-icon' onClick={() => navigate('/notifications')} />
            </Badge>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} xl={5} className='avatar-container'>
            <Dropdown overlay={menu} placement='bottom' className='avatar-dropdown'>
              <div style={{ display: 'flex' }}>
                <Avatar
                  src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                  size={{ ...avatar_size }}
                  className='avatar'
                />

                <Space direction='vertical' size={[8, 0]} className='avatar-details'>
                  <Typography.Text className='avatar-name'>Nguyen Van A</Typography.Text>
                  <Typography.Text>{t(`ROLE.${'admin'.toUpperCase()}`)}</Typography.Text>
                </Space>
              </div>
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
      {props.collapsed === false && (
        <Row className='collapse-container-desktop'>
          <Col xs={24} sm={24} md={24} className='menu-container'>
            <Menu
              selectedKeys={[props.activeItem]}
              defaultSelectedKeys={['notifications']}
              mode='inline'
              onClick={({ key }) => {
                navigate(key);
                handleClickMenu(key);
              }}
              items={props.IMenu}
            />
          </Col>
        </Row>
      )}
    </>
  );
}

export default HeaderComponent;
