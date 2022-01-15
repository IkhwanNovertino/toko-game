import { ComponentStory, Meta } from "@storybook/react";
import GameItem, { GameItemProps } from "../../../../components/molecules/game-item";

export default {
  title: 'Component/Molecules/game-item',
  component: GameItem,
} as Meta;

const Template: ComponentStory<typeof GameItem> = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Super Mechs',
  category: 'Mobile',
  thumbnail: '/img/Thumbnail-1.png'
}