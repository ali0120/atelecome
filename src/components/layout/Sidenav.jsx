import React, { useState } from 'react';
import { FileOutlined, PieChartOutlined, UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { ReactSVG } from 'react-svg';
import dashboardIcon from './../../assets/images/sideNav/dashboard.svg'
import smsIcon from './../../assets/images/sideNav/sms.svg'
import contactsdIcon from './../../assets/images/sideNav/contacts.svg'
import chartIcon from './../../assets/images/sideNav/chart.svg'
import helpIcon from './../../assets/images/sideNav/help.svg'
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '1', <ReactSVG src={dashboardIcon} />),
  getItem('Sms', 'sub1', <ReactSVG src={smsIcon} />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Dashboard', '1', <ReactSVG src={contactsdIcon} />),
  getItem('Reports', '10', <ReactSVG src={chartIcon} />),
  getItem('Help', '11', <ReactSVG src={helpIcon} />),
];

function Sidenav() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <Sider className={`isomorphicSidebar ${collapsed ? "sider-width" : "not-collapse"
        } sidebarCustom `} collapsed={collapsed} style={{
          background: "var(--primary-color)"
        }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '22px',
            height: 64,
            margin: '0 auto',
            width: '100%'
          }}
        />
        <Menu style={{
          background: "var(--primary-color)", marginTop: "50px", display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }} defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    </>
  );
}

export default Sidenav;
