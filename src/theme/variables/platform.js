import color from "color";

import { Platform, Dimensions, PixelRatio } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = "platform";
const isIphoneX =
  platform === "ios" && deviceHeight === 812 && deviceWidth === 375;

export default {
  platformStyle,
  platform,

  // Android
  androidRipple: true,
  androidRippleColor: "rgba(256, 256, 256, 0.3)",
  androidRippleColorDark: "rgba(0, 0, 0, 0.15)",
  btnUppercaseAndroidText: true,

  // Badge
  badgeBg: "#ED1727",
  badgeColor: "#fff",
  badgePadding: platform === "ios" ? 3 : 0,

  // Button
  btnFontFamily: platform === "ios" ? "System" : "Roboto",
  btnDisabledBg: "#b5b5b5",
  buttonPadding: 10,
  btnPrimaryBg: "#8C0052",
  btnPrimaryColor: "#fff",
  btnInfoBg: "#3F57D3",
  btnInfoColor: "#fff",
  btnSuccessBg: "#5cb85c",
  btnSuccessColor: "#fff",
  btnDangerBg: "#d9534f",
  btnDangerColor: "#fff",
  btnWarningBg: "#f0ad4e",
  btnWarningColor: "#fff",

  get btnTextSize() {
    return platform === "ios" ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: "#fff",
  cardBorderColor: "#ccc",

  // CheckBox
  CheckboxRadius: platform === "ios" ? 13 : 0,
  CheckboxBorderWidth: platform === "ios" ? 1 : 2,
  CheckboxPaddingLeft: platform === "ios" ? 4 : 2,
  CheckboxPaddingBottom: platform === "ios" ? 0 : 5,
  CheckboxIconSize: platform === "ios" ? 21 : 16,
  CheckboxIconMarginTop: platform === "ios" ? undefined : 1,
  CheckboxFontSize: platform === "ios" ? 23 / 0.9 : 17,
  DefaultFontSize: 17,
  checkboxBgColor: "#039BE5",
  checkboxSize: 20,
  checkboxTickColor: "#fff",

  // Color
  brandPrimary: platform === "ios" ? "#007aff" : "#091338",
  brandInfo: "#3F57D3",
  brandSuccess: "#5cb85c",
  brandDanger: "#d9534f",
  brandWarning: "#f0ad4e",
  brandDark: "#000",
  brandLight: "#f4f4f4",

  // Font
  fontFamily: platform === "ios" ? "System" : "Roboto",
  fontSizeBase: 15,
  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: isIphoneX ? 89 : 55,
  footerDefaultBg: platform === "ios" ? "#F8F8F8" : "#091338",
  footerPaddingBottom: isIphoneX ? 34 : 0,

  // FooterTab
  tabBarTextColor: platform === "ios" ? "#6b6b6b" : "#fff",
  tabBarTextSize: platform === "ios" ? 14 : 11,
  activeTab: platform === "ios" ? "#007aff" : "#fff",
  sTabBarActiveTextColor: "#8C0052",
  tabBarActiveTextColor: platform === "ios" ? "#007aff" : "#D1C4E9",
  tabActiveBgColor: platform === "ios" ? "#cde1f9" : "#091338",

  // Header
  toolbarBtnColor: platform === "ios" ? "#007aff" : "#fff",
  toolbarDefaultBg: platform === "ios" ? "#F8F8F8" : "#091338",
  toolbarHeight: platform === "ios" ? (isIphoneX ? 88 : 64) : 56,
  toolbarSearchIconSize: platform === "ios" ? 20 : 23,
  toolbarInputColor: platform === "ios" ? "#CECDD2" : "#fff",
  searchBarHeight: platform === "ios" ? 30 : 40,
  searchBarInputHeight: platform === "ios" ? 30 : 50,
  toolbarBtnTextColor: platform === "ios" ? "#007aff" : "#fff",
  toolbarDefaultBorder: platform === "ios" ? "#a7a6ab" : "#D1C4E9",
  iosStatusbar: platform === "ios" ? "dark-content" : "light-content",
  get statusBarColor() {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  // Icon
  iconFamily: "Ionicons",
  iconFontSize: platform === "ios" ? 30 : 28,
  iconHeaderSize: platform === "ios" ? 33 : 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: "#D1C4E9",
  inputSuccessBorderColor: "#2b8339",
  inputErrorBorderColor: "#ed2f2f",
  inputHeightBase: 50,
  inputColor: "#212121",
  inputColorPlaceholder:"#757575",
  

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: platform === "ios" ? 20 : 24,

  // List
  listBg: "transparent",
  listBorderColor: "#D1C4E9",
  listDividerBg: "#E9E7EC",
  listBtnUnderlayColor: "#DDD",
  listItemPadding: platform === "ios" ? 10 : 12,
  listNoteColor: "#808080",
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: "#E4202D",
  inverseProgressColor: "#1A191B",

  // Radio Button
  radioBtnSize: platform === "ios" ? 25 : 23,
  radioSelectedColorAndroid: "#8C0052",
  radioBtnLineHeight: platform === "ios" ? 29 : 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: platform === "ios" ? "#F8F8F8" : "#091338",
  segmentActiveBackgroundColor: platform === "ios" ? "#007aff" : "#fff",
  segmentTextColor: platform === "ios" ? "#007aff" : "#fff",
  segmentActiveTextColor: platform === "ios" ? "#fff" : "#091338",
  segmentBorderColor: platform === "ios" ? "#007aff" : "#fff",
  segmentBorderColorMain: platform === "ios" ? "#a7a6ab" : "#3F51B5",

  // Spinner
  defaultSpinnerColor: "#8C0052",
  inverseSpinnerColor: "#1A191B",

  // Tab
  tabDefaultBg: platform === "ios" ? "#F8F8F8" : "#091338",
  topTabBarTextColor: platform === "ios" ? "#6b6b6b" : "#fff",
  topTabBarActiveTextColor: platform === "ios" ? "#007aff" : "#fff",
  topTabBarBorderColor: platform === "ios" ? "#a7a6ab" : "#D1C4E9",
  topTabBarActiveBorderColor: platform === "ios" ? "#007aff" : "#8C0052",

  // Tabs
  tabBgColor: "#F8F8F8",
  tabFontSize: 15,

  // Text
  textColor: "#212121",
  inverseTextColor: "#fff",
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: platform === "ios" ? "System" : "Roboto",
  titleFontSize: platform === "ios" ? 17 : 19,
  subTitleFontSize: platform === "ios" ? 12 : 14,
  subtitleColor: platform === "ios" ? "#8e8e93" : "#FFF",
  titleFontColor: platform === "ios" ? "#000" : "#FFF",

  // Other
  borderRadiusBase: platform === "ios" ? 5 : 50,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: "#000000",
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30
};
