// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, Meta } from "@storybook/react";
import Input, { InputProps } from "../../../../components/atoms/Input";

export default {
  title: 'Component/Atoms/Input',
  component: Input,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Input> = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Nama Lengkap',
};
