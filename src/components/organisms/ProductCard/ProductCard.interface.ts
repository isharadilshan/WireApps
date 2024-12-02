import {IProduct} from '@models/product';

interface IProductCard {
  product: IProduct;
  onPressProduct: () => void;
}

export default IProductCard;
