import { Link, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { sizes } from "@/constants/metrics";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        headerTitleAlign: "center",
        headerTitle: "",
        headerRight: () => (
          <Link href={"/profile"}>
            <TabBarIcon
              name={"person"}
              color={Colors[colorScheme ?? "light"].text}
            />
          </Link>
        ),
        headerRightContainerStyle: {
          paddingHorizontal: sizes.level_4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Películas",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "videocam" : "videocam-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Buscar",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favs"
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "heart" : "heart-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
