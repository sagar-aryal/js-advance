import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  user: {},
  token: "",
  loading: false,
  error: "",
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (body) => {
    const response = await fetch(`http://localhost:5000/api/v1/user/getUser`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  }
);

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
