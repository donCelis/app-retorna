import { sizes } from "@/constants/metrics";
import { Pressable, StyleSheet } from "react-native";
import { theme } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

export const TabItem = ({
  item,
  onPress,
  isActive,
}: {
  item: string;
  onPress: (genre: string) => void;
  isActive: boolean;
}) => {
  const color = isActive ? theme.colors.white : theme.colors.neutral(0.8);
  const backgroundColor = isActive
    ? theme.colors.neutral(0.8)
    : theme.colors.white;
  return (
    <Pressable
      onPress={() => onPress(item)}
      style={[stylesTabItem.tab, { backgroundColor }]}
    >
      <ThemedText style={{ color }}>{item}</ThemedText>
    </Pressable>
  );
};

const stylesTabItem = StyleSheet.create({
  tab: {
    padding: sizes.level_2,
    paddingHorizontal: sizes.level_4,
    borderRadius: sizes.level_4,
    borderCurve: "continuous",
    borderWidth: 1,
    borderColor: theme.colors.grayBG,
  },
});
