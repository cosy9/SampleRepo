import React, { createContext, useState, useEffect, useContext } from "react";
import * as _ from "lodash";
import { useRouter } from "next/router";
import { getAccessToken } from "../services/Cart/CartService";
import { clearCart } from "../store/slices/cartSlice";
import { clearWishlistData } from "../store/slices/wishlistSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearSalonAndGender } from "src/store/slices/salonGenderSlice";
import { clearSalon } from "src/store/slices/checkoutSlice";
import { clearMembershipData } from "src/store/reducers/totalSpentSlice";

export const AuthContext = createContext({
  login: (values?: any) => {
    values;
  },
  logout: () => {},
  updateLocalStorageProfile: () => null,
  updateLocalStorageQuoteId: (_quoteId?: any) => null,
  isAuthenticated: false,
  userDetails: null,
  deleteAccountlogout: () => {},
});

interface AuthContextProps {
  children?: React.ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [userDetails, setUserDetails] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const totalSpent = useAppSelector(state => state.totalSpent.data);

  const login = (values?: any) => {
    values.data.membershipGroup = totalSpent.data?.user_membership_details
      ? totalSpent.data?.user_membership_details.name
      : undefined;
    if (values.status) {
      localStorage.access_token = _.get(values, ["data", "access_token"]);
      localStorage.quote_id = _.get(values, ["data", "quote_id"]);
      localStorage.userDetails = JSON.stringify(_.get(values, ["data"]));
    }
    setUserDetails(values.data);
    setAuthenticated(values.status);
    if (window.location.href.includes("register")) {
      router.push("/");
    }
  };

  const logout = () => {
    router.push("/").then(() => {
      setUserDetails(null);
      localStorage.clear();
    });
    // dispatch(getCartData());
    setAuthenticated(false);
    dispatch(clearWishlistData());
    dispatch(clearCart());
    dispatch(clearSalonAndGender());
    dispatch(clearSalon());
    dispatch(clearMembershipData());
  };

  const deleteAccountlogout = () => {
    setUserDetails(null);
    localStorage.clear();
    setAuthenticated(false);
    // dispatch(getCartData());
    dispatch(clearWishlistData());
    dispatch(clearCart());
    dispatch(clearSalonAndGender());
    dispatch(clearSalon());
    dispatch(clearMembershipData());
  };
  const updateLocalStorageProfile = (updatedData?: any) => {
    let profile = typeof window !== undefined && window.localStorage ? _.get(localStorage, ["userDetails"], "") : {};
    profile = JSON.parse(profile);
    const mobileNumber = updatedData.custom_attributes.find(
      (customerInfo: any) => customerInfo.attribute_code === "mobile_number",
    ).value;
    profile["first_name"] = updatedData["firstname"];
    profile["last_name"] = updatedData["lastname"];
    profile["gender"].gender_id = updatedData["gender"];
    profile["gender"].gender_name = updatedData["gender"] === 1 ? "Male" : "Female"
    profile["customer_number"] = mobileNumber;

    localStorage.setItem("userDetails", JSON.stringify(profile));
    setUserDetails(profile);
    return profile;
  };

  const updateLocalStorageQuoteId = (quoteId?: any) => {
    if (quoteId !== "") {
      if (getAccessToken() !== "" && quoteId) {
        let profile =
          typeof window !== undefined && window.localStorage ? _.get(localStorage, ["userDetails"], "") : {};

        profile = JSON.parse(profile);

        profile["quote_id"] = quoteId;

        setUserDetails(profile);

        localStorage.setItem("userDetails", JSON.stringify(profile));
        localStorage.setItem("quote_id", quoteId);

        return profile;
      } else {
        if (quoteId) {
          localStorage.setItem("quote_id", quoteId);
          return quoteId;
        }
      }
    }
  };

  useEffect(() => {
    async function authenticateUser() {
      let token = typeof window !== undefined && window.localStorage ? _.get(localStorage, ["access_token"], "") : null;
      let userDetails =
        typeof window !== undefined && window.localStorage ? _.get(localStorage, ["userDetails"], "") : {};

      if (token && isAuthenticated === false) {
        setUserDetails(JSON.parse(userDetails));
        setAuthenticated(true);
      } else {
        setUserDetails(null);
        setAuthenticated(false);
      }
    }
    authenticateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isAuthenticated,
        updateLocalStorageProfile,
        userDetails,
        updateLocalStorageQuoteId,
        deleteAccountlogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
