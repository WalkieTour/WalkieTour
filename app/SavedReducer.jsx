import { createSlice } from "@reduxjs/toolkit";

export const SavedSlice = createSlice({
  name: "saved",
  initialState: {
    saved: [],
  },
  reducers: {
    savedPlaces: (state, action) => {
      const exists = state.saved.some(item => item.id === action.payload.id)
      if (exists) {
        state.saved = state.saved.filter(item => item.id !== action.payload.id)
      } else {
        state.saved.push(action.payload)
      }
    },
    removeSaved: (state, action) => {
      state.saved = state.saved.filter(item => item.id !== action.payload)
    },
  },
})

export const { savedPlaces, removeSaved } = SavedSlice.actions

export default SavedSlice.reducer
