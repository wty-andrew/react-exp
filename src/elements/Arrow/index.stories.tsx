import React from 'react'
import { Story, Meta } from '@storybook/react'

import Arrow, { ArrowProps } from '.'

export default {
  title: 'Arrow',
  component: Arrow,
  decorators: [
    (Story) => (
      <svg>
        <Story />
      </svg>
    ),
  ],
} as Meta

const Template: Story<ArrowProps> = (args) => <Arrow {...args} />

export const Default = Template.bind({})
Default.args = {
  x1: 50,
  y1: 50,
  x2: 100,
  y2: 100,
}

export const Hollow = Template.bind({})
Hollow.args = {
  ...Default.args,
  hollow: true,
}
