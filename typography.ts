import { createTheme, Theme } from "@mui/material/styles";
import { TypographyStyleOptions } from "@mui/material/styles/createTypography";
import { fontSize } from "@mui/system";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: TypographyStyleOptions;
    body4: TypographyStyleOptions;
    customHeading: TypographyStyleOptions;
    tabsHeaderButton?: TypographyStyleOptions;
    freeShippingTitle?: TypographyStyleOptions;
    freeShippingSubTitle?: TypographyStyleOptions;
    filters?: TypographyStyleOptions;
    homePageSectionHeader?: TypographyStyleOptions;
    bookAService?: TypographyStyleOptions;
    homepageSectionHeading?: TypographyStyleOptions;
    trendingCategoriesTitle: TypographyStyleOptions;
    homepageSubTitle1: TypographyStyleOptions;
    searchResultText?: TypographyStyleOptions;
    searchResultCount?: TypographyStyleOptions;
    searchPageTabs?: TypographyStyleOptions;
    futuraMD: TypographyStyleOptions;
    futuraDemi: TypographyStyleOptions;
    buttonDevider: TypographyStyleOptions;
    pageTitleCount: TypographyStyleOptions;
    pageFiltersClearAll: TypographyStyleOptions;
    cardCarousalText: TypographyStyleOptions;
    exclusiveOfferText: TypographyStyleOptions;
    titleCount: TypographyStyleOptions;
    viewAllText: TypographyStyleOptions;
    priceText: TypographyStyleOptions;
    membershipCardTitle: TypographyStyleOptions;
    membershipCardDesc: TypographyStyleOptions;
    feedbackFormTitle: TypographyStyleOptions;
    serviceTitle: TypographyStyleOptions;
    moreDetails: TypographyStyleOptions;
    pdpTabText: TypographyStyleOptions;
    signUpTitle: TypographyStyleOptions;
    signUpCta: TypographyStyleOptions;
    footerLogoText: TypographyStyleOptions;
    termsPrivacyStatement: TypographyStyleOptions;
    loginPopupTitle: TypographyStyleOptions;
    countryCodePrefix: TypographyStyleOptions;
    rewardTextStyles: TypographyStyleOptions;
    onlyFewLeft: TypographyStyleOptions;
    moreAndLess: TypographyStyleOptions;
    ratingAndShades: TypographyStyleOptions;
    megaMenuHeader: TypographyStyleOptions;
    userProfileName: TypographyStyleOptions;
    userMobile: TypographyStyleOptions;
    addressType: TypographyStyleOptions;
    howItWorksTitle: TypographyStyleOptions;
    orderDetails: TypographyStyleOptions;
    serviceTilePrice: TypographyStyleOptions;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: TypographyStyleOptions;
    body4?: TypographyStyleOptions;
    customHeading: TypographyStyleOptions;
    tabsHeaderButton?: TypographyStyleOptions;
    freeShippingTitle?: TypographyStyleOptions;
    freeShippingSubTitle?: TypographyStyleOptions;
    filters?: TypographyStyleOptions;
    homePageSectionHeader?: TypographyStyleOptions;
    bookAService?: TypographyStyleOptions;
    homepageSectionHeading?: TypographyStyleOptions;
    trendingCategoriesTitle: TypographyStyleOptions;
    homepageSubTitle1: TypographyStyleOptions;
    searchResultText?: TypographyStyleOptions;
    searchResultCount?: TypographyStyleOptions;
    searchResultBold?: TypographyStyleOptions;
    searchPageTabs?: TypographyStyleOptions;
    futuraMD?: TypographyStyleOptions;
    futuraDemi?: TypographyStyleOptions;
    buttonDevider: TypographyStyleOptions;
    pageTitleCount: TypographyStyleOptions;
    pageFiltersClearAll: TypographyStyleOptions;
    cardCarousalText: TypographyStyleOptions;
    exclusiveOfferText: TypographyStyleOptions;
    titleCount: TypographyStyleOptions;
    viewAllText: TypographyStyleOptions;
    priceText: TypographyStyleOptions;
    membershipCardTitle: TypographyStyleOptions;
    membershipCardDesc: TypographyStyleOptions;
    feedbackFormTitle: TypographyStyleOptions;
    serviceTitle: TypographyStyleOptions;
    moreDetails: TypographyStyleOptions;
    pdpTabText: TypographyStyleOptions;
    signUpTitle?: TypographyStyleOptions;
    signUpCta?: TypographyStyleOptions;
    footerLogoText: TypographyStyleOptions;
    termsPrivacyStatement: TypographyStyleOptions;
    loginPopupTitle: TypographyStyleOptions;
    countryCodePrefix: TypographyStyleOptions;
    rewardTextStyles: TypographyStyleOptions;
    onlyFewLeft: TypographyStyleOptions;
    moreAndLess: TypographyStyleOptions;
    ratingAndShades: TypographyStyleOptions;
    megaMenuHeader?: TypographyStyleOptions;
    userProfileName: TypographyStyleOptions;
    userMobile: TypographyStyleOptions;
    addressType: TypographyStyleOptions;
    howItWorksTitle: TypographyStyleOptions;
    orderDetails: TypographyStyleOptions;
    serviceTilePrice: TypographyStyleOptions;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
    customHeading: true;
    tabsHeaderButton: true;
    freeShippingTitle: true;
    freeShippingSubTitle: true;
    filters: true;
    homePageSectionHeader: true;
    bookAService: true;
    homepageSectionHeading: true;
    trendingCategoriesTitle: true;
    homepageSubTitle1: true;
    searchResultText: true;
    searchResultCount: true;
    searchResultBold: true;
    searchPageTabs: true;
    futuraMD: true;
    futuraDemi: true;
    buttonDevider: true;
    pageTitleCount: true;
    pageFiltersClearAll: true;
    cardCarousalText: true;
    exclusiveOfferText: true;
    titleCount: true;
    viewAllText: true;
    priceText: true;
    membershipCardTitle: true;
    membershipCardDesc: true;
    feedbackFormTitle: true;
    serviceTitle: true;
    moreDetails: true;
    pdpTabText: true;
    signUpTitle: true;
    signUpCta: true;
    footerLogoText: true;
    termsPrivacyStatement: true;
    loginPopupTitle: true;
    countryCodePrefix: true;
    rewardTextStyles: true;
    onlyFewLeft: true;
    moreAndLess: true;
    ratingAndShades: true;
    megaMenuHeader: true;
    family: true;
    userProfileName: true;
    userMobile: true;
    addressType: true;
    howItWorksTitle: true;
    orderDetails: true;
    serviceTilePrice: true;
  }
}

export const BREAKPOINTS_VARIABLES = {
  xs: 0,
  sm: 768,
  md: 900,
  lg: 1204,
  xl: 1660,
};

const theme: Theme = createTheme({
  zIndex: {
    snackbar: 2000,
  },
  breakpoints: {
    values: BREAKPOINTS_VARIABLES,
  },
  palette: {
    background: {
      default: "#F5F6F8", // grey body bg
    },
    text: {
      primary: "#2B2A29",
      secondary: "#707070",
      // disabled: "#CCCCCC",
    },
    primary: {
      main: "#FC2249",
      dark: "#f44d52",
      light: "#EB643E",
    },
    secondary: {
      main: "#2B2A29",
      dark: "#FC2249", //used for button background
    },
    success: {
      main: "#1EAF67",
      light: "#ECFFF6",
      dark: "#098B0D",
    },
    warning: {
      main: "#FE5E21",
    },
    info: {
      main: "#707070",
      contrastText: "#E1E1E1",
      light: "#F5F6F8",
    },
    common: {
      white: "#fff",
    },
    grey: {
      500: "#e6e6e6",
      600: "#757575",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "1.85rem",
      fontFamily: "Roboto Medium",
      fontWeight: "normal",
      // for extra large screens
      [`@media screen and (min-width:1600px)`]: {},

      // for desktop screen large
      [`@media screen and (min-width:1441px)`]: {},

      // for desktop screen
      [`@media screen and (min-width:1280px)`]: {},

      // for ipads
      [`@media screen and (min-width:768px)`]: {},

      // for mobile
      [`@media screen and (min-width:320px)`]: {},
    },
    h2: {
      fontSize: "2.063rem", // 33px
      fontFamily: "Roboto Medium",
      fontWeight: "normal",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1.2rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1439px)`]: {
        fontSize: "1.1rem",
      },
      [`@media screen and (min-width:1440px)`]: {
        fontSize: "1.1rem",
      },
      [`@media screen and (min-width:1600px)`]: {
        fontSize: "1.1rem",
      },
    },
    h3: {
      fontSize: "1.625rem", //26px
      fontFamily: "Roboto Medium",
      fontWeight: "normal",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "1.125rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1366px)`]: {
        fontSize: "1.5rem",
      },
      [`@media screen and (min-width:1367px) and (max-width:1599px)`]: {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontSize: "1.563rem", // 25px
      fontFamily: "Roboto Medium",
      fontWeight: "normal",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1.25rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1.2rem",
      },
    },
    h5: {
      fontSize: "1.375rem", //22px
      fontFamily: "Roboto Medium",
      fontWeight: "normal",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "1.125rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1.25rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1.1rem",
      },
    },
    h6: {
      fontSize: "1.125rem", // 18px
      fontFamily: "Roboto Medium",
      fontWeight: "normal",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1.12rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1.12rem",
      },
    },
    customHeading: {
      fontSize: "1.625rem", //26px
      fontFamily: "Roboto",
      display: "block",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.96rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1.25rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1.25rem",
      },
      [`@media screen and (min-width:1600px)`]: {
        fontSize: "1.4rem",
      },
    },
    button: {
      fontFamily: "Roboto Medium",
      textTransform: "uppercase",
      fontWeight: 500,
      borderRadius: 0,
      fontSize: "1.375rem", // 22px
      color: "#fff",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1rem",
      },
    },
    subtitle1: {
      fontSize: "1.125rem", // 18px
      fontFamily: "Roboto Medium",
      textTransform: "capitalize",
      fontWeight: 400,
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1.12rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "0.875rem",
      },
    },
    subtitle2: {
      fontSize: "1rem", //16px
      fontFamily: "Roboto Medium",
      fontWeight: 400,
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.96rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1366px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:1367px) and (max-width:1599px)`]: {
        fontSize: "1rem",
      },
    },
    body1: {
      fontSize: "1.25rem", //20px
      fontFamily: "Roboto",
      fontWeight: 400,

      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.96rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:1600px)`]: {
        fontSize: "1rem",
      },
    },
    body2: {
      fontSize: "1rem", //16px
      fontFamily: "Roboto",
      fontWeight: 400,

      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.96rem",
        wordBreak: "break-all",
      },
      [`@media screen and (min-width:768px) and (max-width:1366px)`]: {
        fontSize: "0.875rem",
      },
      [`@media screen and (min-width:1367px) and (max-width:1599px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:1600px)`]: {
        fontSize: "1rem",
      },
    },
    body3: {
      fontSize: "0.875rem", //14px
      fontFamily: "Roboto",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.75rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "0.75rem",
      },
    },
    body4: {
      fontSize: "0.75rem", //12px,
      fontFamily: "Roboto",
    },
    tabsHeaderButton: {
      fontSize: "0.87rem", //14px
      fontFamily: "Roboto Medium",
      ":hover": {
        color: "#f44d52",
      },
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.95rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1.1rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1.1rem",
      },
    },
    freeShippingTitle: {
      fontSize: "1.188rem", //19px
      fontFamily: "Roboto Medium",
      textTransform: "uppercase",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.6rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1.1rem",
      },
    },
    freeShippingSubTitle: {
      fontSize: "1.188rem", //19px
      fontFamily: "Roboto",
      textTransform: "capitalize",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.58rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1.188rem",
      },
    },
    filters: {
      fontSize: "10px", //19px
      lineHeight: "13px",
      fontFamily: "Roboto Medium",
      textTransform: "capitalize",
      [`@media screen and (min-width: ${BREAKPOINTS_VARIABLES.md}px)`]: {
        fontSize: "0.875rem",
        lineHeight: "1.0625rem",
      },
      [`@media screen and (min-width: ${BREAKPOINTS_VARIABLES.xl}px)`]: {
        fontSize: "1.1875rem",
        lineHeight: "1.375rem",
      },
    },
    bookAService: {
      fontSize: "1.875rem", // 30px
      fontFamily: "Roboto Medium",
      textTransform: "uppercase",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.86rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1.6rem",
      },
    },

    homepageSectionHeading: {
      fontSize: "1.625rem", //26px
      fontFamily: "Roboto Medium",
      fontWeight: 400,
      textTransform: "capitalize",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "1.2rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1.25rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1.35rem",
      },
    },

    trendingCategoriesTitle: {
      fontSize: "1.75rem", //28px
      fontFamily: "Roboto",
      fontWeight: 400,
      textTransform: "capitalize",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.9rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1.35rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1.5rem",
      },
      [`@media screen and (min-width:1600px)`]: {
        fontSize: "1.5rem",
      },
    },
    homepageSubTitle1: {
      fontSize: "1.563rem", // 25px
      fontFamily: "Roboto Medium",
      fontWeight: 400,
      textTransform: "capitalize",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.86rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1.365rem",
      },
    },

    searchResultText: {
      fontSize: "0.75rem", // 12px
      lineHeight: "0.875rem",
      fontFamily: "Roboto Medium",
      textTransform: "capitalize",
      color: "#707070",
      [`@media screen and (min-width: ${BREAKPOINTS_VARIABLES.lg}px)`]: {
        fontSize: "0.875rem",
        lineHeight: "1.0625rem",
      },
    },
    searchResultCount: {
      fontSize: "0.625rem", // 10px
      fontFamily: "Roboto",
      textTransform: "capitalize",
      color: "#707070",
    },

    searchResultBold: {
      fontSize: "0.625rem", // 10px
      fontFamily: "Roboto",
      textTransform: "capitalize",
      color: "#000",
    },

    searchPageTabs: {
      fontSize: "1.375rem", //22px
      lineHeight: "22px", // 27px
      fontFamily: "Roboto Medium",
      letterSpacing: "0.36px",
      textTransform: "capitalize",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.875rem",
        lineHeight: "24px",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "0.875rem",
        lineHeight: "24px",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1rem",
        lineHeight: "27px",
      },
    },
    cardCarousalText: {
      fontSize: "1.1rem", //24px
      fontFamily: "Roboto",
      ":hover": {
        color: "#FC2249",
      },
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.84rem",
      },
      [`@media only screen and (device-width: 320px) and (orientation: portrait)`]: {
        fontSize: "0.69rem",
      },
      [`@media only screen and (device-width: 360px) and (orientation: portrait)`]: {
        fontSize: "0.75rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1.1rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1.1rem",
      },
    },
    exclusiveOfferText: {
      fontSize: "1rem", //16px
      fontFamily: "Roboto Medium",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.875rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "0.875rem",
      },
    },
    titleCount: {
      fontSize: "1.375rem", // 22px
      fontFamily: "Roboto",
      textTransform: "capitalize",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1366px)`]: {
        fontSize: "1rem",
      },
    },
    viewAllText: {
      fontSize: "1rem", //16px
      fontFamily: "Roboto",
      fontWeight: 400,

      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.8rem",
        wordBreak: "break-all",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "0.8rem",
      },
      [`@media screen and (min-width:1600px)`]: {
        fontSize: "0.8rem",
      },
    },
    // used under pagelayout leftnav
    futuraMD: {
      fontFamily: "Roboto Medium",
    },
    futuraDemi: {
      fontFamily: "Roboto Medium",
    },
    buttonDevider: {
      fontSize: "1rem", //16px
      fontFamily: "Roboto",
      fontWeight: 300,
      margin: "4px 8px 0px 6px",
    },

    pageTitleCount: {
      fontSize: "1.125rem", // 18px
      fontFamily: "Roboto Medium",
      textTransform: "capitalize",
      fontWeight: 400,
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1.1rem",
      },
    },

    pageFiltersClearAll: {
      fontSize: "12px",
      lineHeight: "14px",
      fontFamily: "Roboto Medium",
      textTransform: "capitalize",
      [`@media screen and (min-width: ${BREAKPOINTS_VARIABLES.xl}px)`]: {
        fontSize: "1rem",
        lineHeight: "1.1875rem",
      },
    },
    priceText: {
      fontSize: "1.625rem", //24px
      fontFamily: "Roboto Medium",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.875rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "0.875rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1.125rem",
      },
    },
    membershipCardTitle: {
      fontSize: "1.063rem", //17px
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.875rem", //14px
        wordBreak: "break-all",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1.063rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1.063rem",
      },
      [`@media screen and (min-width:1600px)`]: {
        fontSize: " 1.125rem", //18px
      },
    },
    membershipCardDesc: {
      fontSize: "0.9375rem", //15px
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.75rem", //12px
        wordBreak: "break-all",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "0.9375rem", //15px
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "0.9375rem",
      },
      [`@media screen and (min-width:1600px)`]: {
        fontSize: "1rem", //16
      },
    },
    feedbackFormTitle: {
      fontSize: "1.125rem", //18px
      fontFamily: "Roboto Medium",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.813rem", //13px
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "0.813rem", //13px
      },
    },
    serviceTitle: {
      fontSize: "14px",
      lineHeight: "17px",
      fontFamily: "Roboto Medium",
      [`@media only screen and (min-width: ${BREAKPOINTS_VARIABLES.xl}px)`]: {
        fontSize: "1rem",
        lineHeight: "1.1875rem",
      },
    },
    moreDetails: {
      fontSize: "0.688rem", //11px
      fontFamily: "Roboto",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.5rem", //10px
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "0.625rem", //10px
      },
    },
    pdpTabText: {
      fontSize: "1.125rem", // 18px
      fontFamily: "Roboto Medium",
      fontWeight: 500,
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.875rem", //14px
      },
    },
    signUpTitle: {
      fontSize: "1.25rem", //20px
      fontFamily: "Roboto Medium",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "1.25rem", //24px
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "0.875rem", //14px
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "0.875rem", //14px
      },
    },
    footerLogoText: {
      fontSize: "0.875rem", //14px
      fontFamily: "Roboto",
      fontWeight: 400,
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.875rem", //14px
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "0.5625rem", //9px
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "0.5625rem", //9px
      },
    },
    signUpCta: {
      fontSize: "0.875rem", //14px
      fontFamily: "Roboto",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "1rem", //16px
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "0.594rem", //10px
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "0.594rem", //10px
      },
    },
    termsPrivacyStatement: {
      fontSize: "0.625rem", // 10px
      fontFamily: "Roboto",
      color: "#707070",
    },
    loginPopupTitle: {
      fontSize: "1rem", //16px
      fontFamily: "Roboto Medium",
      fontWeight: 500,
    },
    countryCodePrefix: {
      fontSize: "1rem", //16px
      fontFamily: "Roboto",
      fontWeight: 400,
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:1280px) and (max-width:1599px)`]: {
        fontSize: "1rem",
      },
    },
    rewardTextStyles: {
      fontSize: "0.75rem",
      fontFamily: "Roboto",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.5rem", //10px
      },
      [`@media screen and (min-width:768px) and (max-width:1279px)`]: {
        fontSize: "0.5rem", //11px
      },
    },
    onlyFewLeft: {
      fontSize: "0.75rem",
      fontFamily: "Roboto Medium",
      color: "#AA0320",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.5rem", //10px
      },
      [`@media screen and (min-width:767px) and (max-width:1366px)`]: {
        fontSize: "0.5rem", //10px
      },
    },
    moreAndLess: {
      fontSize: "1rem", //16px
      lineHeight: "0.8125rem",
      wordBreak: "break-all",
      fontFamily: "Roboto",
      fontWeight: 400,

      [`@media screen and (min-width: ${BREAKPOINTS_VARIABLES.md}px)`]: {
        fontSize: "16px",
        lineHeight: "19px",
      },
      [`@media screen and (min-width: ${BREAKPOINTS_VARIABLES.md}px) and (max-width : ${BREAKPOINTS_VARIABLES.xl}px)`]: {
        fontSize: "10px",
        lineHeight: "19px",
      },
    },
    ratingAndShades: {
      fontSize: "9px",
      lineHeight: "11px",
      fontFamily: "Roboto Medium",
      [`@media screen and (min-width: ${BREAKPOINTS_VARIABLES.xl}px)`]: {
        fontSize: "0.75rem",
        lineHeight: "0.875rem",
      },
    },
    megaMenuHeader: {
      fontSize: "0.875rem", //14px
      lineHeight: "1.0625rem",
      fontFamily: "Roboto Medium",
      letterSpacing: ".42px",
      [`@media screen and (max-width:767px)`]: {
        fontSize: "0.95rem",
      },
      [`@media screen and (max-width:1640px)`]: {
        fontSize: ".75rem",
      },
    },
    userProfileName: {
      fontSize: "1.125rem", //18px
      fontFamily: "Roboto Medium",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "1rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1366px)`]: {
        fontSize: "1rem",
      },
    },
    userMobile: {
      fontSize: "0.875rem", //14px
      fontFamily: "Roboto",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.75rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1366px)`]: {
        fontSize: "0.75rem",
      },
    },
    addressType: {
      fontSize: "0.875rem", //14px
      fontFamily: "Roboto Medium",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.75rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1366px)`]: {
        fontSize: "0.75rem",
      },
    },
    howItWorksTitle: {
      fontSize: "0.875rem", //14px
      fontFamily: "Roboto Medium",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.875rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1366px)`]: {
        fontSize: "0.875rem",
      },
    },
    orderDetails: {
      fontSize: "1.125rem", //18px
      fontFamily: "Roboto Medium",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.875rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1366px)`]: {
        fontSize: "1rem",
      },
    },
    serviceTilePrice: {
      fontSize: "1rem", //16px
      fontFamily: "Roboto Medium",
      [`@media screen and (min-width:0px) and (max-width:767px)`]: {
        fontSize: "0.875rem",
      },
      [`@media screen and (min-width:768px) and (max-width:1366px)`]: {
        fontSize: "0.875rem",
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `     
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/assets/fonts/roboto-v30-latin-regular.woff2') format('woff2')
        }
      @font-face {
          font-family: 'Roboto Medium';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url('/assets/fonts/roboto-v30-latin-500.woff2') format('woff2')
          }
      @font-face {
        font-family: 'Roboto Bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/assets/fonts/roboto-v30-latin-700.woff2') format('woff2')
      }
      `,
    },
    MuiBadge: {
      styleOverrides: {
        colorError: {
          backgroundColor: "#FC2249",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#FC2249",
          border: "1px solid #FC2249",
          "&:hover": {
            border: "1px solid #FC2249",
            backgroundColor: "#FC2249",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 0 10px #0000000D",
        },
      },
    },
  },
});

export default theme;
