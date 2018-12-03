import React from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Outline extends React.Component {

  render() {
    return (
      <Layout className="layout">

        <Header>
          <div className="logo" />
          <Menu theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}>
            <Menu.Item key="1"><Link to="/articles">Articles</Link></Menu.Item>
            <Menu.Item key="2"><Link to="login">Login</Link></Menu.Item>
            <Menu.Item key="3"><Link to="signup">Signup</Link></Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/articles">List</Link></Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            { this.props.children }
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

      </Layout>
    );
  }
};

export default Outline;