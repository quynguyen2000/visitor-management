import { createSlice } from '@reduxjs/toolkit';

interface NotificationInterface {
  unRead: number;
  isLoad: boolean;
}

const initialState: NotificationInterface = {
  unRead: 0,
  isLoad: false,
};

const notifySlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotify(state, action) {
      state.unRead = action.payload;
    },
    setRefresh(state, action) {
      state.isLoad = action.payload;
    },
  },
});

const { reducer, actions } = notifySlice;

export const { setNotify, setRefresh } = actions;

export default reducer;
