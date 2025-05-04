import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';

const initialState = {
  baseCurrency: '',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
   
    setbaseCurrency: (state, { payload }) => {
      state.baseCurrency = payload;
    },
  },
  extraReducers: builder => {
   
    builder.addCase(fetchBaseCurrency.fulfilled, (state, { payload }) => {
      state.baseCurrency = payload;
    });
  },
});


export const { setbaseCurrency } = currencySlice.actions;
export default currencySlice.reducer;
