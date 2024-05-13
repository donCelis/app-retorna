import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export const wp = (percentage: number) => (percentage * deviceWidth) / 100;
export const hp = (percentage: number) => (percentage * deviceHeight) / 100;
