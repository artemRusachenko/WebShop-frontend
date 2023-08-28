import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  isSignInModal: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredantials: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    setIsSignInModal: (state) => {
      state.isSignInModal = !state.isSignInModal;
    }
  },
});

export const { setCredantials, logout, setIsSignInModal } = authSlice.actions;
export default authSlice.reducer;
