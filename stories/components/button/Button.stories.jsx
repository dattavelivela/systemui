import React from 'react';
import Button from './Button';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    toggleLabel: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['xlarge', 'large', 'default', 'small', 'xsmall'],
    },
    type: {
      control: 'select',
      options: ['solid', 'outline', 'text-only'],
    },
    color: {
      control: 'select',
      options: ['primary', 'grey', 'success', 'danger', 'warning'],
    },
    disabled: { control: 'boolean' },
    toggleLeftIcon: { control: 'boolean' },
    toggleRightIcon: { control: 'boolean' },
  },
};
// Base story
export const Default = {
  args: {
    label: 'Button',
    toggleLabel: true,
    size: 'default',
    type: 'solid',
    color: 'primary',
    disabled: false,
    toggleLeftIcon: false,
    toggleRightIcon: false,
    iconLeft: <FaArrowLeft />,
    iconRight: <FaArrowRight />,
  },
};
// Additional variants
export const OutlineButton = {
  args: {
    ...Default.args,
    type: 'outline',
  },
};
export const TextButton = {
  args: {
    ...Default.args,
    type: 'text-only',
  },
};
export const WithIcons = {
  args: {
    ...Default.args,
    toggleLeftIcon: true,
    toggleRightIcon: true,
  },
};