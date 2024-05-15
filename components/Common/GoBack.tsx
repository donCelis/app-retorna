import { theme } from "@/constants/Colors";
import { sizes } from "@/constants/metrics";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
};

export const GoBack = ({ style }: Props) => {
  const canGoBack = router.canGoBack();
  if (!canGoBack) return null;

  return (
    <Pressable onPress={() => router.back()} style={[styles.btn, style]}>
      <Ionicons name="chevron-back" size={24} color={"white"} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: theme.colors.neutral(0.8),
    padding: sizes.level_2,
    borderRadius: sizes.level_2,
  },
});
