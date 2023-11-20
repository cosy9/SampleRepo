import { CartItem } from "../../interfaces/Cart";
import { magento } from "../client";
import { RestfulUrls } from "../restfulUrls";

// USING SERVICE TO GET WISHLIST DATA
interface GetAddToCartParameters {
  customerId?: number;
}

export interface AddToCartParam {
  customerId: number;
  salonId?: number;
  items: AddToCartItem[];
  device: string;
}

export interface AddToCartItem {
  quote_id: number;
  sku: string;
  qty: number;
  product_option?: ProductOption;
}
export interface BundleOption {
  option_qty?: number;
  option_id?: number;
  option_selections?: string[];
}
export interface ConfigOption {
  option_id: string;
  option_value: number;
}

export interface ExtensionAttributes {
  bundle_options?: BundleOption[];
  configurable_item_options?: ConfigOption[];
}

export interface ProductOption {
  extension_attributes?: ExtensionAttributes;
}
export interface Item {
  appointment_type?: string;
  category_tree?: any[];
  qty: number;
  product_option?: ProductOption;
  sku: string;
}
export interface AddToCartGuestParam {
  guestQuoteId: string;
  salonId: number;
  device: string;
  items: Item[];
}

export type BulkCartItem = Pick<CartItem, "qty" | "sku" | "product_option">;

export interface BulkCart {
  items: BulkCartItem[];
  quote_id: number;
  cart_id: number;
  is_custom: boolean;
  appointment_type: string;
  product_option?: ProductOption;
  device?: string;
}

export interface BulkCartParams {
  cart: BulkCart;
  device: string;
  salonId?: number;
}

export function addToCartService(parameters: AddToCartParam) {
  const response = magento.post(RestfulUrls.addToCart, parameters);
  return response;
}

export function getGuestAddToCartService(parameters: AddToCartGuestParam) {
  return magento.post("/api/v1/cart/guest/addToCart", parameters).then(res => {
    return res;
  });
}

export function bulkAddToCartService(parameters: BulkCartParams) {
  const response = magento.post("/api/v1/cart/user/bulkAddToCart", parameters);
  return response;
}
