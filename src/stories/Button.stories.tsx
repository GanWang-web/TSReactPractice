import Button from '../components/Button'
import { ComponentMeta, storiesOf, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';



export default {
  title: 'components/Button',
  component: Button,
  argTypes:{handleClick:{action:"handdddd"}},
} as ComponentMeta<typeof Button>

const Template:ComponentStory<typeof Button>=(args)=>(<Button {...args}/>)

export const Red = Template.bind({})
Red.args = ({
  backgroundColor:'red',
  label:"Press Me",
  size:"md"
})
