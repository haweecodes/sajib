import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

type MenuProp = { link: string, label: string };
type Links = Array<MenuProp>;

interface HeaderProps {
  links?: Links;
  current: string;
}

const centerStyle = {
  display: 'flex',
  justifyContent: 'center'
};

export const Header = ({ links, current}: HeaderProps) => {
  return (
    <Menu mode="horizontal" style={centerStyle}>
      {links.map((linkItem) => 
      <Menu.Item key={linkItem.link}>
        <Link href={linkItem.link}>
          {linkItem.label}
        </Link>
      </Menu.Item>
      )}
    </Menu>
  );
};
