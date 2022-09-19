export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number
}

export interface GameListTypes {
  _id: string;
  thumbnail: string;
  status: string;
  name: string;
  category: CategoryTypes;
}