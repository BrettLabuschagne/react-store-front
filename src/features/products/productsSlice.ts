import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api, { fetchCategories } from '../../api';
import { Product } from '../../types';

interface ProductsState {
  items: Product[];
  loading: boolean;
  categories: string[];
  selectedCategory: string;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  categories: [],
  selectedCategory: 'all',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (category?: string) => {
  const response = await api.get<Product[]>(category && category !== 'all' ? `/products/category/${category}` : '/products');
  return response.data;
});

export const fetchProductCategories = createAsyncThunk('products/fetchProductCategories', async () => {
  const categories = await fetchCategories();
  return categories;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchProductCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { selectCategory } = productsSlice.actions;

export default productsSlice.reducer;
