import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const { SubMenu } = Menu;

const mountNode = document.getElementById('root');


class Sider extends React.Component {

  handleClick = (e: any) => {
    console.log('click', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        theme="dark"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Better Things">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Come To Those">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Who Wait">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <Menu.Item key="reports">
          <a href="/reports">Reports</a>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <a href="/analytics-dashboard">Dashboard</a>
        </Menu.Item>
        <Menu.Item icon={<SettingOutlined />}>
          <a href="/transaction-query">Transaction Query</a>
        </Menu.Item>
        <Menu.Item icon={<SettingOutlined />}>
          <a href="/reconciliation">Transaction Reconciliation</a>
        </Menu.Item> 
      </Menu>
    );
  }
}

ReactDOM.render(<Sider />, mountNode);

export default Sider;
