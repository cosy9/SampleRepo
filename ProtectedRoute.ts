import React from "react";
import * as _ from "lodash";
import { PrivateRoutes } from "../constants/routePaths";
import { Box, BoxProps, CircularProgress } from "@mui/material";

const isBrowser = () => typeof window !== "undefined";

export interface ProtectedRouteProps {
  children?: React.ReactNode;
  router?: any;
}

interface pageStyles {
  loaderWrapper?: BoxProps;
}
const styles: pageStyles = {
  loaderWrapper: {
    sx: {
      "&.MuiBox-root": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        maxHeight: "500px",
      }
    },
  },
};

const ProtectedRoute = ({ router, children }: ProtectedRouteProps) => {
  if (
    isBrowser() &&
    _.isEmpty(_.get(localStorage, ["access_token"], "")) &&
    PrivateRoutes.some(
      (route) =>
        !router.pathname.includes("/customer/checkout") &&
        router.pathname.includes(route)
    )
  ) {
     router.push("/login");
  } else {
    return <>{children}</>;
  }
  return (
    <Box {...styles.loaderWrapper}>
      <CircularProgress style={{ position: "fixed", top: "50%", left: "50%" }} />
    </Box>
  );
};

export default ProtectedRoute;
