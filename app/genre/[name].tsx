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
  const { moviesByGenre, isLoading, hasMovies, isRefetching, refetch } =
    useGetMovies();
  const currentMovies = moviesByGenre[name ?? "Action"];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.gray,
        position: "relative",
      }}
    >
      <View style={{ position: "relative" }}>
        <GoBack
          style={{
            alignSelf: "flex-start",
            zIndex: 10,
            marginBottom: -16,
            marginLeft: 16,
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
      {!isLoading && hasMovies && (
        <MoviesGrid
          movies={currentMovies}
          refreshing={isRefetching}
          onRefresh={refetch}
        />
      )}
    </SafeAreaView>
  );
}
