import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const CustomeHeader = Template.bind({});
CustomeHeader.args = {
  Links: [
    {
      link: '/',
      label: 'Intro'
    },
    {
      link: '/profile',
      label: 'Profile'
    },
    {
      link: '/work',
      label: 'Work'
    },
  ],
  current: '/'
};
