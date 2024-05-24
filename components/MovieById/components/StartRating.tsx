import { StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { type ComponentProps } from "react";
import { calculateStars } from "@/scripts";

const Start = ({
  numberStars,
  color,
  nameIcon,
}: {
  numberStars: number;
  color: string;
  nameIcon: ComponentProps<typeof Ionicons>["name"];
}) => {
  return Array.from({ length: numberStars }, (_, index) => (
    <Ionicons key={`start-${index}`} name={nameIcon} color={color} size={20} />
  ));
};

export const StartRating = ({ rating }: { rating: number }) => {
  const { fullStars, halfStars, emptyStars } = calculateStars(rating);

  return (
    <View style={styles.container}>
      <Start numberStars={fullStars} color="#f1c40f" nameIcon={"star"} />
      <Start numberStars={halfStars} color="#f1c40f" nameIcon={"star-half"} />
      <Start numberStars={emptyStars} color="#bdc3c7" nameIcon={"star"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap" },
});
