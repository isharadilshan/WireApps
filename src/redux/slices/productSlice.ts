import {createSlice} from '@reduxjs/toolkit';

interface ProductState {
  productList: any[];
  productCart: {};
}

const initialState: ProductState = {
  productList: [],
  productCart: {},
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.productList = action.payload;
    },
  },
});

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;
