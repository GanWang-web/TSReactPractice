import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Menu, message, Space } from 'antd';
import React from 'react';

// const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//   message.info('Click on left button.');
//   console.log('click left button', e);
// };

const handleMenuClick: MenuProps['onClick'] = e => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const menu = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: '1st menu item',
        key: '1',
        icon: <UserOutlined />,
      },
      {
        label: '2nd menu item',
        key: '2',
        icon: <UserOutlined />,
      },
      {
        label: '3rd menu item',
        key: '3',
        icon: <UserOutlined />,
      },
    ]}
  />
);
interface props{
  str:string
}
const DatePick: React.FC<props> = ({str}) => {
  return (
    <Space wrap>
      <Dropdown overlay={menu} arrow={false}>
        <Button >
          <Space>
            {str}&nbsp;&nbsp;
            <DownOutlined  />
          </Space>
        </Button>
      </Dropdown>
    </Space>);
}

export default DatePick;