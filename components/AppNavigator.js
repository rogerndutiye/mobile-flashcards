import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import HomeScreen from "../screens/HomeScreen";
import AddCardScreen from "../screens/AddCardScreen";
import AddDeckScreen from "../screens/AddDeckScreen";
import DeckDetailScreen from "../screens/DeckDetailScreen";
import QuizScreen from "../screens/QuizScreen";
import Settings from "../screens/Settings";
import { primaryColor } from "../utils/styles";

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        gestureEnabled: true,
        headerStyle: { backgroundColor: primaryColor },
        tabBarActiveTintColor: "#3730A3",
        tabBarInactiveTintColor: "#374151",
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Deck List"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="home"
              color={color}
              size={30}
              style={{
                marginBottom: 3,
                alignSelf: "center",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddDeck"
        component={AddDeckScreen}
        options={{
          tabBarLabel: "AddDeck",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-to-queue" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          gestureEnabled: true,
          headerStyle: { backgroundColor: primaryColor },
        }}
      >
        <Stack.Screen
          name="Dashboard"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="DeckView" component={DeckDetailScreen} />
        <Stack.Screen name="AddCard" component={AddCardScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
