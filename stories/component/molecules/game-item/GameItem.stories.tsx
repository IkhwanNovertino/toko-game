// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, Meta } from "@storybook/react";
import GameItem, { GameItemProps } from "../../../../components/molecules/game-item";

export default {
  title: 'Component/Molecules/game-item',
  component: GameItem,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof GameItem> = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Super Mechs',
  category: 'Mobile',
  thumbnail: '/img/Thumbnail-1.png',
};
