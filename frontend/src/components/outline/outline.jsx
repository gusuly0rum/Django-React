import React from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Outline extends React.Component {

  render() {
    let login = <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>;
    let logout = <Menu.Item key="2" onClick={this.props.logoutUser}>Logout</Menu.Item>;
    let signup = <Menu.Item key="3"><Link to="/signup">Signup</Link></Menu.Item>;
    let createArticle = <Menu.Item key="4"><Link to="/articles/create">Create Article</Link></Menu.Item>;

    if (this.props.token) {
      login = null;
      signup = null;
    } else {
      logout = null;
      createArticle = null;
    }

    return (
      <Layout className="layout">

        <Header>
          <div className="logo" />
          <Menu theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}>
            <Menu.Item key="1"><Link to="/articles">Articles</Link></Menu.Item>
            {createArticle}
            { logout }
            { login }
            { signup }
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