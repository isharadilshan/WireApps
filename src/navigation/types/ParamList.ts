import {IProduct} from '@models/product';

export type AppParamList = {
  HOME_SCREEN: undefined;
  PRODUCT_DETAIL_SCREEN: {product: IProduct} | undefined;
  PRODUCT_CART_SCREEN: undefined;
};
