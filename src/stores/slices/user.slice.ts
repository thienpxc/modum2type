import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import apis from "../../apis";


enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
interface User {
  id: number;
  userName: string;
  password: string;
  email: string;
  phoneNumber: string;
  status: UserStatus;
}
interface UserState {
  data: User | null;
}


const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
  } as UserState,
  reducers: {
    setData: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
    // putData: (state, action: PayloadAction<User>) => {
    //   state.data = action.payload;
    // },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(jobAll.fulfilled, (state, action) => {
  //     state.data = action.payload;
      
  //   });
  // },
});

const productApi = createAsyncThunk("user/validateToken", async () => {
  const res = await apis.productApi.productApi();
  return res.data;
});
export const userReducer = userSlice.reducer;
export const userAction = {
  ...userSlice.actions,
  productApi,
  // jobAll,
};
