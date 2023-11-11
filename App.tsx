import * as React from "react";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/themes/createEmotionCache";
import { StyledEngineProvider } from "@mui/material/styles";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { store, persistor } from "./../src/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "./temporaryCss.css";
import { AuthContextProvider } from "../src/context/authContext";
import { CircularProgress, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../src/themes/theme";
import { SnackbarProvider } from "notistack";
import QuickViewModel from "../src/components/ProductListing/QuickViewModel";
import ProtectedRoute from "../src/routes/protectedRoutes";
import { useRouter } from "next/router";
import TagManager from "react-gtm-module";
import { HistoryProvider } from "../src/context/history";
import NextNprogress from "nextjs-progressbar";
import LoginModal from "src/components/Header/LoginModal";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    TagManager.initialize({ gtmId: `${process.env.NEXT_PUBLIC_DEV_GTM_KEY}` });
  }, []);

  const router = useRouter();

  const getLayout = Component.getLayout ?? (page => page);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NextNprogress color={"#FC2249"} />
          <CacheProvider value={emotionCache}>
            <AuthContextProvider>
              <HistoryProvider>
                <ThemeProvider theme={theme}>
                  <SnackbarProvider style={{ wordBreak: "break-word" }}>
                    <CssBaseline />
                    <ProtectedRoute router={router}>{getLayout(<Component {...pageProps} />)}</ProtectedRoute>
                    <QuickViewModel />
                    <LoginModal />
                  </SnackbarProvider>
                </ThemeProvider>
              </HistoryProvider>
            </AuthContextProvider>
          </CacheProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
