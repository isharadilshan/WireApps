import {createSlice} from '@reduxjs/toolkit';

interface ProductState {
  productCartList: any[];
}

const initialState: ProductState = {
  productCartList: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateProductCart(state, action) {
      state.productCartList = action.payload;
    },
  },
});

export const {updateProductCart} = productSlice.actions;
export default productSlice.reducer;
