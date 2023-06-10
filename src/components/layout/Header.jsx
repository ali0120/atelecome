import React from "react";
import { theme, Layout, Row, Col, Dropdown, Menu, Badge } from 'antd';
import { DownOutlined, LogoutOutlined, BellOutlined } from '@ant-design/icons';
import mobiseLogo from './../../assets/images/appLogo/Mobise-Logo.png';
import logo from './../../assets/images/ourLogo/logo.png';

const { Header: AntHeader } = Layout;

function Header() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLogout = () => {

  };

  const handleNotifications = () => {

  };

  const menu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout}>
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );
  const notificationsMenu = (
    <Menu>
      <Menu.Item key="notifications" onClick={handleNotifications}>
        Notifications
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <AntHeader
        className="ant-header-fixed"
        style={{
          padding: '16px 30px',
          background: colorBgContainer,
          display: "flex",
          alignItems: "center",
          height: "100px",
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          border:'1px solid #ccc',
          marginBottom:"1px"
        }}
      >
        <Row style={{ width: '100%', alignItems: 'center' }}>
          <Col span={12}>
            <img width={150} src={mobiseLogo} alt="App Logo" />
          </Col>
          <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end', gap: '30px' }}>
            <Dropdown overlay={notificationsMenu} trigger={['click']}>
              <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '8px' }}>
                <Badge count={10} style={{ top: '80%' }} >
                  <BellOutlined style={{
                    fontSize: '20px',
                    background: '#E9E9E9',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    padding: '10px'
                  }} />
                </Badge>
                <DownOutlined style={{ marginLeft: '8px' }} />
              </div>
            </Dropdown>
            <div style={{ lineHeight: 'initial' }}>
              <h5 style={{ color: '#B4B4B4' }}>Welcome</h5>
              <h3 style={{ color: "#373737" }}>TA Telecom</h3>
            </div>
            <Dropdown overlay={menu} trigger={['click']}>
              <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <img src={logo} alt="Our Logo" style={{ marginRight: '8px' }} />
                <DownOutlined style={{ marginLeft: '8px' }} />
              </div>
            </Dropdown>
          </Col>
        </Row>
      </AntHeader >
    </>
  );
}

export default Header;
