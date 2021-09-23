import React, { useEffect } from "react";
import { View, StatusBar } from "react-native";
import Constants from "expo-constants";
import { Provider } from "react-redux";
import store from "./store/index";
import { setLocalNotification } from "./utils/helpers";
import styles from "./utils/styles";
import AppNavigator from "./components/AppNavigator";

export default function App() {
  useEffect(() => {
    setLocalNotification();
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.barContainer}>
        <AppStatusBar backgroundColor="#3730A3" barStyle="light-content" />
        <AppNavigator />
      </View>
    </Provider>
  );
}

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar
        animated={true}
        translucent
        backgroundColor={backgroundColor}
        {...props}
      />
    </View>
  );
}
