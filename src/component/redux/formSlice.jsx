import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vehicleInformation: {},
  features: {},
  rentalInformation: {},
  insuranceInfo: {},
  damages: {},
  others: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveScreen1Data: (state, action) => {
      state.vehicleInformation = action.payload;
    },
    saveScreen2Data: (state, action) => {
      state.features = action.payload;
    },
    saveScreen3Data: (state, action) => {
      state.rentalInformation = action.payload;
    },
    saveScreen4Data: (state, action) => {
      state.insuranceInfo = action.payload;
    },
    saveScreen5Data: (state, action) => {
      state.damages = action.payload;
    },
    saveScreen6Data: (state, action) => {
      state.others = action.payload;
    },

    clearFormData: () => initialState,
  },
});

export const {
  saveScreen1Data,
  saveScreen2Data,
  saveScreen3Data,
  saveScreen4Data,
  saveScreen5Data,
  saveScreen6Data,
  clearFormData,
} = formSlice.actions;

export default formSlice.reducer;
