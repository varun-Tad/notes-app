import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userState: false,

  // false -> signed out
  // true -> signed in
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser: (state, action) => {
      state.userState = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { changeUser, printUser } = userSlice.actions;
