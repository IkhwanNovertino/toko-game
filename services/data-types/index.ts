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

export interface BanksTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BanksTypes[];
}

export interface NominalsTypes {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export interface JWTPayloadTypes {
  player: UserTypes;
  iat: number;
}

export interface CheckoutTypes {
  voucher: string,
  nominal: string,
  payment: string,
  bank: string,
  name: string,
  accountUser: string,
}

export interface TopupCategoriesTypes {
  _id: string,
  value: number,
  name: string,
}

export interface HistoryVoucherTopupTypes {
  category: string,
  coinName: string,
  coinQuantity: number,
  gameName: string,
  price: number,
  thumbnail: string,
}

export interface HistoryPaymentTypes {
  name: string,
  type: string,
  bankName: string,
  noRekening: string,
}

export interface TransactionsTypes {
  _id: string,
  value: number,
  status: string,
  accountUser: string,
  name: string,
  tax: number,
  historyVoucherTopup: HistoryVoucherTopupTypes,
  historyPayment: HistoryPaymentTypes,
}
