import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getUserInfo: undefined,
  token: null,
};

export const getUserInfo = createAsyncThunk(
    "auth/matches",
    async (data) => {
      try {
        const response = await axios.get(
            `https://sozhiyavellalarmarriage.com/matrimonyApp/UserController/getUsersList`,
            data,
        );
        console.log("response", response);
        if (response.status === 200) {
          return {
            usr_id: response?.data?.results[0]?.usr_id,
            usr_email:response?.data?.results[0]?.usr_email,
            usr_password:response?.data?.results[0]?.usr_password,
            usr_name:response?.data?.results[0]?.usr_name,
            usr_gender:response?.data?.results[0]?.usr_gender,
            usr_image:response?.data?.results[0]?.usr_image,
            usr_dob:response?.data?.results[0]?.usr_dob,
            usr_marital_status:response?.data?.results[0]?.usr_marital_status,
            usr_contact_person:response?.data?.results[0]?.usr_contact_person,
            usr_mobile:response?.data?.results[0]?.usr_mobile,
            usr_alternate_number:response?.data?.results[0]?.usr_alternate_number,
            usr_kothram:response?.data?.results[0]?.usr_kothram,
            usr_vellalar_sub_caste:response?.data?.results[0]?.usr_vellalar_sub_caste,
            usr_created_by:response?.data?.results[0]?.usr_created_by,
            usr_profile:response?.data?.results[0]?.usr_profile,
            usr_birth_time:response?.data?.results[0]?.usr_birth_time,
            usr_birth_day:response?.data?.results[0]?.usr_birth_day,
            usr_birth_place:response?.data?.results[0]?.usr_birth_place,
            usr_rasi:response?.data?.results[0]?.usr_rasi,
            usr_star:response?.data?.results[0]?.usr_star,
            usr_padham:response?.data?.results[0]?.usr_padham,
            usr_lagnam:response?.data?.results[0]?.usr_lagnam,
            usr_janana_kaala_thisai:response?.data?.results[0]?.usr_janana_kaala_thisai,
            usr_sevvai:response?.data?.results[0]?.usr_sevvai,
            usr_raaghu:response?.data?.results[0]?.usr_raaghu,
            usr_education:response?.data?.results[0]?.usr_education,
            usr_education_details:response?.data?.results[0]?.usr_education_details,
            usr_college:response?.data?.results[0]?.usr_college,
            usr_occupation:response?.data?.results[0]?.usr_occupation,
            usr_job_title:response?.data?.results[0]?.usr_job_title,
            usr_employer_details:response?.data?.results[0]?.usr_employer_details,
            usr_current_employed_country:response?.data?.results[0]?.usr_current_employed_country,
            usr_income:response?.data?.results[0]?.usr_income,
            usr_address:response?.data?.results[0]?.usr_address,
            usr_country:response?.data?.results[0]?.usr_country,
            usr_state:response?.data?.results[0]?.usr_state,
            usr_city:response?.data?.results[0]?.usr_city,
            usr_living_country:response?.data?.results[0]?.usr_living_country,
            usr_native:response?.data?.results[0]?.usr_native,
            usr_personal_website:response?.data?.results[0]?.usr_personal_website,
          };
        } else {
          return new Error();
        }
      } catch (error) {
        throw new Error(error.response.data);
      }
  });


  export const userListSlice = createSlice({
    name: "userList",
    initialState,
    reducers: {
      clearUserInfo: (state) => {
        state.getUserInfo = undefined;
        state.token = null;
      },
    },
    extraReducers(build) {
      build
        .addCase(getUserInfo.pending, (state) => {
          state.getUserInfo = {
            loading: true,
          };
        })        
        .addCase(getUserInfo.fulfilled, (state, action) => {
          state.getUserInfo = {
            isLoading: false,
            userInfo: action?.payload,
          };
        })
        .addCase(getUserInfo.rejected, (state, action) => {
          state.getUserInfo = {
            isError: action?.error?.message,
            loading: false,
          };
        })
    },
});

export const { clearUserInfo } = userListSlice.actions;

export default userListSlice.reducer;