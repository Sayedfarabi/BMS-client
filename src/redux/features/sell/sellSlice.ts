import { createSlice } from "@reduxjs/toolkit";

type TSellData = {
  buyerName: null | string;
  productQuantity: null | number;
  dateOfSale: null | string;
};

export type TSellPayload = {
  _id: null | string;
  sellData: TSellData;
};

const initialState: TSellPayload = {
  _id: null,
  sellData: {
    buyerName: null,
    productQuantity: null,
    dateOfSale: null,
  },
};

const sellSlice = createSlice({
  name: "sell",
  initialState,
  reducers: {
    setBuyer: (state, action) => {
      state.sellData.buyerName = action.payload;
    },
    setQuantity: (state, action) => {
      state.sellData.productQuantity = parseInt(action.payload);
    },
    setDate: (state, action) => {
      state.sellData.dateOfSale = action.payload;
    },
    setProductId: (state, action) => {
      state._id = action.payload;
    },
    removeSell: (state) => {
      state.sellData.buyerName = null;
      state.sellData.dateOfSale = null;
      state.sellData.productQuantity = null;
      state._id = null;
    },
  },
});

export const { setBuyer, setQuantity, setDate, setProductId, removeSell } =
  sellSlice.actions;
export default sellSlice.reducer;
