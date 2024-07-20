import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Header } from './Header';

const meta = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onChange:fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ordinary: Story = {
  args: {
    label:'普通输入框',
    type:"text",
    placeholder:'请输入内容'
  },
};
export const Password: Story = {
  args: {
    label:'密码输入框',
    type:"password",
    placeholder:'请输入密码'
  },
};

export const Radio: Story = {
  args: {
    label:'单选框',
    type:"radio",
  },
};
export const Checkbox: Story = {
  args: {
    label:'多选框',
    type:"checkbox",
  },
};
export const Number: Story = {
  args: {
    label:'数字输入框',
    type:"number",
  },
};
