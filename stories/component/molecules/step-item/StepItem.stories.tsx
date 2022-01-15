import { ComponentStory, Meta } from "@storybook/react";
import StepItem, { StepItemProps } from "../../../../components/molecules/step-item";

export default {
  title: 'Component/Molecules/step-item',
  component: StepItem,
} as Meta;

const Template: ComponentStory<typeof StepItem> = (args: StepItemProps) => <StepItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "1. Start",
  desc1: "Pilih salah satu game",
  desc2: "yang ingin kamu top up",
  icon: "icon-step-1"
}