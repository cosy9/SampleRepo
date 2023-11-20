import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartItemForReorder } from "../../interfaces/Cart";
import {
  AddToCartGuestParam,
  AddToCartParam,
  addToCartService,
  bulkAddToCartService,
  getGuestAddToCartService,
  BulkCartItem,
  BulkCartParams,
} from "../../services/AddToCart/addToCartService";
import { getQuoteId } from "../../services/Cart/CartService";
import Status from "../../services/ServiceConstants";
import { store } from "../store";

export const bulkAddToCart = createAsyncThunk(
  "bulkAddToCart",
  async (cartData: CartItem[] | CartItemForReorder[], { rejectWithValue }) => {
    const quote_id = getQuoteId();
    const items: BulkCartItem[] = [];
    cartData.forEach(cartItem => {
      if (
        cartItem?.extension_attributes?.product_category_type !== "Giftcard Reward" &&
        !cartItem?.extension_attributes?.free_product
      ) {
        const cItem = {} as BulkCartItem;
        cItem.sku =
          (cartItem.product_type === "bundle" ? cartItem.extension_attributes?.parent_sku : cartItem.sku) ?? "";
        cItem.qty = cartItem.qty;
        if (cartItem.product_option) {
          cItem.product_option = cartItem.product_option;
        }
        items.push(cItem);
      }
    });
    const mergedCartParams: BulkCartParams = {
      cart: {
        items,
        quote_id: parseInt(quote_id, 10),
        cart_id: parseInt(quote_id, 10),
        is_custom: true,
        appointment_type: "",
      },
      device: "website",
    };
    let salonId = store.getState()?.salonGenderDetails?.salon?.salon_id;
    if (salonId) mergedCartParams.salonId = salonId;
    let response;
    try {
      response = await bulkAddToCartService(mergedCartParams);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// ADD TO Cart
export const addToCart = createAsyncThunk("users/addToCart", async (params: AddToCartParam, { rejectWithValue }) => {
  params.device = "website";
  let response;
  try {
    let salonId = store.getState()?.salonGenderDetails?.salon?.salon_id;
    if (salonId) params.salonId = salonId;
    response = await addToCartService(params);
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const guestAddToCart = createAsyncThunk(
  "guest/guestAddToCart",
  async (params: AddToCartGuestParam, { rejectWithValue }) => {
    params.device = "website";
    let salonId = store.getState()?.salonGenderDetails?.salon?.salon_id;
    if (salonId) params.salonId = salonId;
    let response;
    try {
      response = await getGuestAddToCartService(params);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export interface AddToCartDataType {
  status: boolean;
  message: string;
  data: Data;
}
export interface ItemActivity {
  status: boolean;
  message: string;
}

export interface Data {
  items: any[];
}
export interface GuestQouteID {
  quote_id: string;
}

export interface GuestQouteIDdata {
  status: boolean;
  message: string;
  data: GuestQouteID;
}

export interface StateI {
  isLoading: boolean;
  addToCartData?: AddToCartDataType;
  itemActivityResp?: ItemActivity;
  guestQuoteIDdata?: GuestQouteIDdata;
  error: any;
  status: string;
}

const initialState: StateI = {
  isLoading: false,
  addToCartData: undefined,
  itemActivityResp: undefined,
  status: Status.DEFAULT,
  error: undefined,
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    clearError(state) {
      state.error = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(addToCart.pending, (state: StateI) => {
      state.status = Status.LOADING;
    });
    builder.addCase(addToCart.fulfilled, (state: StateI, action: any) => {
      state.status = Status.SUCCESS;
      state.itemActivityResp = action.payload.data as ItemActivity;
    });
    builder.addCase(addToCart.rejected, (state: StateI, action: any) => {
      state.status = Status.ERROR;
      state.error = action?.payload?.data;
    });
    builder.addCase(guestAddToCart.pending, (state: StateI) => {
      state.status = Status.LOADING;
    });
    builder.addCase(guestAddToCart.fulfilled, (state: StateI, action: any) => {
      state.status = Status.SUCCESS;
      state.itemActivityResp = action.payload.data as ItemActivity;
    });
    builder.addCase(guestAddToCart.rejected, (state: StateI, action: any) => {
      state.status = Status.ERROR;
      state.error = action?.payload?.data;
    });
  },
});

export default addToCartSlice.reducer;
