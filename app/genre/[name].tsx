import { GoBack } from "@/components/Common/GoBack";
import { ThemedText } from "@/components/Common/ThemedText";
import { MoviesGrid } from "@/components/Home/MoviesGrid";
import { theme } from "@/constants/Colors";
import { sizes } from "@/constants/metrics";
import { useGetMovies } from "@/hooks/useGetMovies";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GenreScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const { moviesByGenre, isLoading, hasMovies } = useGetMovies();
  const currentMovies = moviesByGenre[name ?? "Action"];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.gray }}>
      <View style={{ position: "relative" }}>
        <GoBack
          style={{
            alignSelf: "flex-start",
            marginLeft: sizes.level_4,
          }}
        />
        <ThemedText
          type="subtitle"
          style={{
            textAlign: "center",
            paddingBottom: sizes.level_3,
          }}
        >
          {name}
        </ThemedText>
      </View>
      {!isLoading && hasMovies && <MoviesGrid movies={currentMovies} />}
    </SafeAreaView>
  );
}
