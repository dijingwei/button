import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: '默认按钮',
  },
};
export const Danger: Story = {
  args: {
    primary: true,
    label: '删除按钮',
    backgroundColor:"red"
  },
};
export const Shape: Story = {
  args: {
    primary: true,
    label: '圆',
    borderRadius:"50%",
    width:"50px",
    height:"50px"
  },
};
export const Disabled: Story = {
  args: {
    label: '禁用按钮',
    disabled:true,
    backgroundColor:'#f5f5f5',
    color:'#1e1e1e'
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};
export const Secondarys: Story = {
  args: {
    label: 'Secondarys',
    border:"2px solid red"
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: '大按钮',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: '小按钮',
    fontSize:"12px",
    padding:"8px"
  },
};
