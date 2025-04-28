import { createSlice } from "@reduxjs/toolkit"; // (also no need for React import here)

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addValue: (state) => {
      state.value += 1;
    },
    subValue: (state) => {
      state.value -= 1;
    },
    resetValue: (state) => {
      state.value = 0;
    },
  },
});

// Export the action creators
export const { addValue, subValue, resetValue } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
