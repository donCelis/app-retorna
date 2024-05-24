import { theme } from "@/constants/Colors";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.neutral(0.8)} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
