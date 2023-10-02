import { Col, Layout, Menu, Row, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo, MainLogo } from '@app/assets/images';
import './SideBar.scss';

const { Sider } = Layout;

export const SideBar = (props: any) => {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    windowWidth <= 1376 ? props.setCollapsed(true) : props.setCollapsed(false);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      width={350}
      collapsedWidth={100}
      className='sider-container'
    >
      <Row className='slider-container'>
        <Col md={24}>
          <Row className='logo-container'>
            <Space
              style={{ justifyContent: 'center', width: '100%' }}
              size={0}
              onClick={() => navigate('/')}
            >
              {props.collapsed !== true ? (
                <img src={MainLogo} alt='logo' className='logo' />
              ) : (
                <img src={Logo} alt='logo' className='logo' />
              )}
            </Space>
          </Row>
          <Row>
            <Col md={24} className='menu-container'>
              <Menu
                selectedKeys={[props.activeItem]}
                defaultSelectedKeys={['notifications']}
                mode='inline'
                onClick={({ key }) => {
                  navigate(key);
                }}
                items={props?.IMenu}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Sider>
  );
};
