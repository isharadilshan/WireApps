import {IProduct} from '@models/product';

interface ICartCard {
  product: IProduct;
  onPressAddCart: () => void;
  onPressRemoveCart: () => void;
}

export default ICartCard;
