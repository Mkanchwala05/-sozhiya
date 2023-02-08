import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  login: null,
  register: null,
  token: null,
  logout: undefined,
};

export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    const response = await axios.post(
      `https://sozhiyavellalarmarriage.com/matrimonyApp/UserController/login`,
      data,
    );
    console.log("response", response);
    if (response.status === 200) {
      return {
        EmailAddress: response.data.email,
        refresh: response.data.refresh,
        access: response.data.access,
      };
      
    } else {
      return new Error();
    }
  } catch (error) {
    throw new Error(error.response.data);
  }
});

export const verifyToken = createAsyncThunk(
  "auth/verifyToken",
  async (token) => {
    try {
      const response = await axios.post(
        `https://sozhiyavellalarmarriage.com/matrimonyApp/UserController/login`,
        {
          token: token,
        }
      );
      return { status: true, data: response.data };
    } catch (error) {
      return { status: false, error: error };
    }
  }
);

export const register = createAsyncThunk("auth/register", async (data) => {
  try {
    const response = await axios.post(
      `https://sozhiyavellalarmarriage.com/matrimonyApp/UserController/usr_registration`,
      data
    );
    console.log("response", response);
    if (response.status === 200) {
      return true;
    } else {
      return new Error();
    }
  } catch (error) {
    throw new Error(error.response.data);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.login = true;
      state.register = null;
      state.token = null;
    },
  },
  extraReducers(build) {
    build
      .addCase(login.pending, (state) => {
        state.login = {
          isLoading: true,
        };
        state.logout = undefined;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.login = {
          isLoading: false,
          userInfo: action?.payload,
        };
      })
      .addCase(login.rejected, (state, action) => {
        state.login = {
          isLoading: false,
          isError: action?.error,
        };
      })
      .addCase(register.pending, (state) => {
        state.register = {
          isLoading: true,
        };
        state.logout = undefined;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.register = {
          isLoading: false,
          isRegister: action.payload,
        };
      })
      .addCase(register.rejected, (state, action) => {
        state.register = {
          isLoading: false,
          isError: action?.error,
        };
      })
      .addCase(verifyToken.pending, (state) => {
        state.verifyToken = {};
        state.verifyToken.loading = true;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.verifyToken = {};
        state.verifyToken.loading = false;
        state.verifyToken.token = action.payload;
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.verifyToken = {};
        state.verifyToken.loading = false;
        state.verifyToken.error = action.payload;
      })
  },
});

export const { logout } = userSlice.actions;
export const selectUser = (state) => state.login;

export default userSlice.reducer;
