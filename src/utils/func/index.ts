import {IProduct} from '@models/product';

const getTotalCartQuantity = (productCartList: IProduct[]) => {
  if (!productCartList || productCartList.length === 0) {
    return 0;
  }

  return productCartList.reduce((total, item) => total + item?.quantity, 0);
};

export {getTotalCartQuantity};
