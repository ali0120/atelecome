import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AxiosInstance from '../Requests/AxiosInstance';
// React Toastify
import { toast } from 'react-toastify';

const initialState = { records: [], loading: false, error: null }

export const fetchCampaign = createAsyncThunk(
  "clients/fetchCampaign",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = AxiosInstance.get("Campaigns/GetAllHisotry?PageNumber=1").then((res) => {
        return res.data
      })
      return result
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCampaign = createAsyncThunk(
  "Campaigns/Campaign",
  async (Campaign, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await AxiosInstance.post("Campaigns/AddCampaign", Campaign);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {},
  extraReducers: {
    // fetch data
    [fetchCampaign.pending]: (state) => { state.loading = true; },

    [fetchCampaign.fulfilled]: (state, action) => {
      state.loading = false;
      toast.success(action.payload.message, {
        position: toast.POSITION.TOP_RIGHT,
        toastId: 'getCampaign',
      });
      state.records = action.payload;
    },
    [fetchCampaign.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload
    },

    // Add Catalog
    [addCampaign.pending]: (state) => {
      state.loading = true;
    },
    [addCampaign.fulfilled]: (state, action) => {
      state.loading = false;
      state.records.push(action.payload);
      toast.success(action.payload.message, {
        position: toast.POSITION.TOP_RIGHT,
        toastId: 'addCampaign',
      });
    },
    [addCampaign.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

  }
})

export default campaignSlice.reducer
