import React from "react";
import { Tabs } from "expo-router";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { theme } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { AreaView } from "@/components/Common/AreaView";

export default function TabLayout() {
  return (
    <AreaView>
      <StatusBar animated style="dark" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.colors.neutral(0.8),
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Movies",
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
            tabBarLabel: "Search",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "search" : "search-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="genres"
          options={{
            tabBarLabel: "Genres",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "albums" : "albums-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="favs"
          options={{
            tabBarLabel: "Favorites",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "heart" : "heart-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </AreaView>
  );
}
