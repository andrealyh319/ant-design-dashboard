import React, { FC, useState } from 'react';
import { Breadcrumb, Button, Layout } from 'antd';
import logo from './logo.svg';
import Sidebar from '../components/Sidebar/index'
import './App.less';
import Routes from '../routes/AppRouter';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className='logo' />
        <Sidebar />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, backgroundColor:'#FFFFFF' }} />
        <Content>
          <div className="site-layout-background"
            style={{
              padding: 24,
              minHeight: '70vh'
            }}>
            <Routes />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
