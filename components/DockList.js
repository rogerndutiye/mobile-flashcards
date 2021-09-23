import React, { useRef } from "react";
import { Text, Animated, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../utils/styles";

const DockList = ({ title, totalCard }) => {
  const navigation = useNavigation();
  const animatedValue = useRef(new Animated.Value(1)).current;
  const zoomOut = () => {
    Animated.timing(animatedValue, {
      toValue: 1.5,
      duration: 200,
      useNativeDriver: true,
    }).start(() => zoomDown());
  };
  const zoomDown = () => {
    Animated.timing(animatedValue, {
      toValue: 0.95,
      duration: 50,
      useNativeDriver: true,
    }).start(() => NavHandle());
  };

  const NavHandle = () => {
    navigation.navigate("DeckView", { deck: title });
  };

  return (
    <TouchableWithoutFeedback onPress={zoomOut}>
      <Animated.View
        style={[styles.decks, { transform: [{ scale: animatedValue }] }]}
      >
        <Text style={styles.deckTitle}>{title}</Text>
        <Text style={styles.deckInfo}>
          {totalCard === 1
            ? totalCard + " Card"
            : totalCard === 0
            ? "No card"
            : totalCard + " cards"}{" "}
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
export default DockList;
