import {baseApi} from './baseApi';
//tags
import {FETCH_ALL_PRODUCTS} from './tags';
//constants
import {API_ENDPOINTS} from '@utils/constants';

export const productApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProductList: builder.query<any, any>({
      providesTags: [FETCH_ALL_PRODUCTS],
      query() {
        return {
          url: `${API_ENDPOINTS.PRODUCT_LIST}`,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {useGetProductListQuery} = productApi;
