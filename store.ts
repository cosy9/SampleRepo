import UserAddressesSlice from "./slices/userAddressesSlice";
import UserAuthenticationReducer from "./slices/userAuthenticationSlice";
import UserSlice from "./slices/userSlice";
import bankCardsPaymentSlice from "./slices/PaymentSlices/bankCardsPaymentSlice";
// import devToolsEnhancer from "remote-redux-devtools";
import brandsSlice from "./slices/brandsSlice";
import cartPriceSlice from "./slices/cartPriceSlice";
import cartSlice from "./slices/cartSlice";
import categoryFiltersReducer from "./slices/categoryFiltersSlice";
import checkPincodeDataReducer from "./slices/checkPincode";
import checkoutRedemptionSlice from "./slices/checkoutRedemptionSlice";
import checkoutSlice from "./slices/checkoutSlice";
import checkoutStepsSlice from "./slices/checkoutStepsSlice";
import codSlice from "./slices/PaymentSlices/cashOnDelivery";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import downloadInvoiceSlice from "./slices/downloadInvoiceSlice";
import giftCardReducer from "./reducers/giftCardSlice";
import headerSlice from "./slices/headerSlice";
import homePageSlice from "./slices/homePageSlice";
import initializePaymentSlice from "./slices/PaymentSlices/initializePayment";
import megaMenuSlice from "./slices/megaMenuSlice";
import membershipSlice from "./reducers/membershipSlice";
import ValuePackageSlice from "./slices/ValuePackageSlice";
import netBankingPaymentSlice from "./slices/PaymentSlices/netBankingPaymentSlice";
import notificationSlice from "./slices/notificationSlice";
import offerDataReducer from "./reducers/offerData";
import orderRateProductSlice from "./slices/orderRateProdServSlice";
import orderServiceFeedbackSlice from "./slices/serviceFeedbackSlice";
import orderSlice from "./reducers/orderSlice";
import pageLayoutSlice from "./slices/pageLayoutSlice";
import productDetailRatingDataReducer from "./reducers/productDetailRatingSlice";
import productDetailReducer from "./reducers/productDetailSlice";
import productListReducer from "./slices/productListPageSlice";
import promotionalHeaderSlice from "./slices/promotionalHeaderSlice";
import quickViewDetailReducer from "./reducers/quickViewSlice";
import returnQuestionReducer from "./slices/OrderReturnSlice/orderedReturnQuestionSlice";
import rewardsSlice from "./reducers/rewardsSlice";
import salonLocatorSlice from "./slices/salonLocatorSlice";
import searchListReducer from "./slices/searchListPageSlice";
import searchSlice from "./slices/searchSlice";
import serviceListReducer from "./slices/serviceListPageSlice";
import staticPageSlice from "./slices/staticPageSlice";
import storeLocatorReducer from "./slices/storelocator";
import totalSpentSlice from "./reducers/totalSpentSlice";
import upiPaymentSlice from "./slices/PaymentSlices/upiPaymentSlice";
import userOrdersSlice from "./slices/userOrdersSlice";
import userPackagesSlice from "./slices/userPackagesSlice";
import walletReducer from "./reducers/walletSlice";
import wishListReducer from "./slices/wishlistSlice";
import customerInfoSlice from "./slices/customerInfoSlice";
import acceptAddonInviteSlice from "./slices/acceptAddonInviteSlice";
import membershipFAQSlice from "./slices/membershipFAQSlice";
import appoiintmentFeedbackOptionSliceReducer from "./slices/AppointmentServiceFeedback/AppointmentServiceFeedback";
import valuePassSlice from "./reducers/valuePassSlice";
import guestUserOrdersSlice from "./slices/guestUserOrdersSlice";
import salonGenderSlice from "./slices/salonGenderSlice";
import serviceAndValuePackageListSlice from "./slices/serviceAndValuePackageListSlice";
import modalSlice from "src/store/slices/modalSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userLocationInfoSlice from "./slices/userLocationInfoSlice";
import expireReducer from "redux-persist-expire";
import homePageLayoutSlice from "./slices/homePageLayoutSlice";
import offerPageLayoutSlice from "src/store/slices/offerPageLayoutSlice";
import addTocartSlice from "./slices/addTocartSlice";

const expireIn = 21600; // expire in 6h

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "salonGenderDetails",
    "userLocationInfo",
    "headerMegaMenu",
    "checkout",
    "cartPrice",
    "cart",
    "promotionBanner",
    "brands",
    "homePageLayout",
    "offerPageLayout",
    "storelocator",
  ],
  transforms: [
    expireReducer("salonGenderDetails", {
      expireSeconds: expireIn,
      autoExpire: true,
    }),
    expireReducer("headerMegaMenu", {
      expireSeconds: expireIn,
      autoExpire: true,
    }),
    expireReducer("promotionBanner", {
      expireSeconds: expireIn,
      autoExpire: true,
    }),
    expireReducer("brands", {
      expireSeconds: expireIn,
      autoExpire: true,
    }),
    expireReducer("homePageLayout", {
      expireSeconds: expireIn,
      autoExpire: true,
    }),
    expireReducer("offerPageLayout", {
      expireSeconds: expireIn,
      autoExpire: true,
    }),
    expireReducer("storelocator", {
      expireSeconds: expireIn,
      autoExpire: true,
    }),
  ],
};

const rootReducer = combineReducers({
  header: headerSlice,
  homePage: homePageSlice,
  brands: brandsSlice,
  productListData: productListReducer,
  serviceListData: serviceListReducer,
  categoryFilters: categoryFiltersReducer,
  quickViewDetailSlice: quickViewDetailReducer,
  productDetailData: productDetailReducer,
  productDetailRatingData: productDetailRatingDataReducer,
  userAuthentication: UserAuthenticationReducer,
  user: UserSlice,
  wishListData: wishListReducer,
  userAddresses: UserAddressesSlice,
  myWallet: walletReducer,
  giftCard: giftCardReducer,
  orders: orderSlice,
  userOrderDetails: userOrdersSlice,
  rewards: rewardsSlice,
  searchResults: searchSlice,
  searchListData: searchListReducer,
  cart: cartSlice,
  orderProductServiceRate: orderRateProductSlice,
  layout: pageLayoutSlice,
  homePageLayout: homePageLayoutSlice,
  cartPrice: cartPriceSlice,
  pinCode: checkPincodeDataReducer,
  upiPayment: upiPaymentSlice,
  initializePayment: initializePaymentSlice,
  bankCardsPayment: bankCardsPaymentSlice,
  netBankingPayment: netBankingPaymentSlice,
  checkoutRedemption: checkoutRedemptionSlice,
  cashOnDelivery: codSlice,
  productOfferData: offerDataReducer,
  staticPage: staticPageSlice,
  salonLocator: salonLocatorSlice,
  checkout: checkoutSlice,
  notifications: notificationSlice,
  headerPromotionalBanner: promotionalHeaderSlice,
  storelocator: storeLocatorReducer,
  orderServiceFeedback: orderServiceFeedbackSlice,
  userPackages: userPackagesSlice,
  returnQuestion: returnQuestionReducer,
  membership: membershipSlice,
  downloadInvoice: downloadInvoiceSlice,
  checkOutSteps: checkoutStepsSlice,
  headerMegaMenu: megaMenuSlice,
  totalSpent: totalSpentSlice,
  valuePackage: ValuePackageSlice,
  customerInfo: customerInfoSlice,
  addOnIviteInfo: acceptAddonInviteSlice,
  membershipInfo: membershipFAQSlice,
  appoinmentOption: appoiintmentFeedbackOptionSliceReducer,
  valuePass: valuePassSlice,
  guestUserOrderDetails: guestUserOrdersSlice,
  salonGenderDetails: salonGenderSlice,
  serviceAndValuePackageListDetails: serviceAndValuePackageListSlice,
  modal: modalSlice,
  userLocationInfo: userLocationInfoSlice,
  offerPageLayout: offerPageLayoutSlice,
  addToCart: addTocartSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  //devTools:true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
