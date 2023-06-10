import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Sidenav from "./Sidenav";
import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";

const { Content } = Layout;
function Main() {

  return (
    <Layout
      style={{
        minHeight: '100vh'
      }}
    >
      <Sidenav />
      <Layout >
        <Header />
        <Content style={{ padding: '0 0 0 30px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: "70%", padding: "40px 10px" }}>
            <Outlet />
          </div>
          <div className="right" style={{ width: '25%', background: '#fff', padding: "40px 20px" }}>
            <Aside />
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default Main;
