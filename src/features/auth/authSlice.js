// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import authService from "./authService";

// const token = localStorage.getItem("token");

// const initialState = {
//   userInfo: null,
//   token: token ? token : null,
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: "",
// };

// export const signUp = createAsyncThunk(
//   "auth/signup",
//   async (user, thunkApi) => {
//     try {
//       return await authService.signUp(user);
//     } catch (error) {
//       const message = error.message;
//       return thunkApi.rejectWithValue(message);
//     }
//   }
// );

// export const signIn = createAsyncThunk(
//   "auth/signin",
//   async (user, thunkApi) => {
//     try {
//       return await authService.signIn(user);
//     } catch (error) {
//       const message = error.message;
//       return thunkApi.rejectWithValue(message);
//     }
//   }
// );

// export const signOut = createAsyncThunk("auth/signout", async (thunkApi) => {
//   try {
//     await authService.signOut();
//   } catch (error) {
//     const message = error.message;
//     return thunkApi.rejectWithValue(message);
//   }
// });

// export const getUserInfo = createAsyncThunk(
//   "auth/getUserInfo",
//   async (thunkApi) => {
//     try {
//       return await authService.getUserInfo();
//     } catch (error) {
//       const message = error.message;
//       return thunkApi.rejectWithValue(message);
//     }
//   }
// );

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state.isError = false;
//       state.isSuccess = false;
//       state.isLoading = false;
//       state.message = "";
//     },
//   },
//   extraReducers: (builder) => {
//     builder

//       .addCase(signUp.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(signUp.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.token = action.payload;
//       })
//       .addCase(signUp.rejected, (state, action) => {
//         state.token = null;
//         state.isError = true;
//         state.isLoading = false;
//         state.message = action.payload;
//       })

//       // .addCase(signOut.pending, (state) => {
//       //   state.isLoading = true;
//       // })
//       .addCase(signOut.fulfilled, (state) => {
//         // state.isSuccess = true;
//         // state.isLoading = false;
//         state.token = null;
//         state.userInfo = null;
//       })
//       // .addCase(signOut.rejected, (state, action) => {
//       //   state.isLoading = false;
//       //   state.isError = true;
//       //   state.message = action.payload;
//       // })

//       .addCase(signIn.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(signIn.fulfilled, (state, action) => {
//         state.token = action.payload;
//         state.isSuccess = true;
//         state.isLoading = false;
//       })
//       .addCase(signIn.rejected, (state, action) => {
//         state.token = null;
//         state.isError = true;
//         state.isLoading = false;
//         state.message = action.payload;
//       })

//       .addCase(getUserInfo.pending, (state) => {
//         state.isLoading = true;
//       })  
//       .addCase(getUserInfo.fulfilled, (state, action) => {
//         state.userInfo = action.payload;
//         state.isSuccess = true;
//         state.isLoading = false;
//       })
//       .addCase(getUserInfo.rejected, (state, action) => {
//         state.isError = true;
//         state.isLoading = false;
//         state.message = action.payload;
//       });
//   },
// });

// export const { reset } = authSlice.actions;

// export default authSlice.reducer;
