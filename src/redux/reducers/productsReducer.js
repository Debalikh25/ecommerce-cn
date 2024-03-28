import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  loading: false,
  error: null,
};


//Function to FETCH products from API
export const getInitialProductsAsync = createAsyncThunk(
  "FETCH_PRODUCTS",
  async (args, thunkApi) => {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Debalikh25/products/products"
      );
      thunkApi.dispatch(productActions.fetchProductsSuccess(response.data));
    } catch (error) {
      thunkApi.dispatch(productActions.fetchProductsError(error));
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },

    startFetchingProducts: (state, action) => {
      state.loading = true;
    },

    fetchProductsError: (state, action) => {
      state.error = action.payload;
    },

    addProduct : (state,action)=>{
      state.products = [...state.products , action.payload]
    },

    editProduct: (state, action) => {
      
      state.products.forEach((p) => {
          console.log(action.payload.id)
        if (p.id == action.payload.id) {
          console.log("I got executed")
          p.name = action.payload.name;
          p.description = action.payload.description;
          p.price = action.payload.price;
          p.rating = action.payload.rating;
          p.image = action.payload.image;
        }
      });
     
    },

    deleteProduct : (state,action)=>{
        state.products.splice(action.payload , 1);
    }
  },
});

export const productsReducer = productsSlice.reducer;
export const productActions = productsSlice.actions;

export const productSelector = (state) => state.productsReducer;
