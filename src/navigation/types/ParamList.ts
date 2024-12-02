import {IProduct} from '@models/product';

export type AppParamList = {
  Home: undefined;
  ProductDetailScreen: {product: IProduct} | undefined;
  ProductCartScreen: undefined;
};
