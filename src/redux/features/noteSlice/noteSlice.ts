import { createSlice } from '@reduxjs/toolkit';

interface Note {
  note: string;
  created_by: string;
}
interface NoteReducer {
  notes: Note[];
}

const initialState: NoteReducer = {
  notes: [],
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotes(state, action) {
      state.notes = action.payload;
    },
  },
});

const { reducer, actions } = noteSlice;

export const { setNotes } = actions;

export default reducer;
