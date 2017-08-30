import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;


export default class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline">
            <Menu.Item key="1">
              <Icon type="home" />
              <span>仪表盘</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="team" />
              <span>人员管理</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="shop" /><span>店铺管理</span></span>}>
              <Menu.Item key="3">店铺地址</Menu.Item>
              <Menu.Item key="4">店铺分配</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ position: 'relative' }}>
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          <Content style={{ margin: '0 16px', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
            {/* <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div style={{ padding: 24, background: '#fff', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
              {this.props.app}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
