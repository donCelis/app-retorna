import { HEIGHT_IMAGE_CARD, sizes } from "@/constants/metrics";
import { Movie } from "@/types/movie";
import { Image } from "expo-image";
import { View } from "react-native";
import { ThemedText } from "./ThemedText";

export const MovieCard = ({ poster, title }: Movie) => {
  return (
    <View style={{ padding: sizes.level_3 }}>
      <View style={{ gap: sizes.level_1 }}>
        <Image
          style={{
            height: HEIGHT_IMAGE_CARD,
            width: "100%",
            borderRadius: sizes.level_2,
          }}
          source={{ uri: poster }}
          contentFit="cover"
          transition={{ duration: 100 }}
        />
        <View>
          <ThemedText numberOfLines={1}>{title}</ThemedText>
        </View>
      </View>
    </View>
  );
};
