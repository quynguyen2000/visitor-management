import { createSlice } from '@reduxjs/toolkit';

interface CustomerInterface {
  isLoad: boolean;
}

const initialState: CustomerInterface = {
  isLoad: false,
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    isLoading(state, action) {
      state.isLoad = action.payload;
    },
  },
});

const { reducer, actions } = customerSlice;

export const { isLoading } = actions;

export default reducer;
