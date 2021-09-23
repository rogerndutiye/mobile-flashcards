import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../utils/styles";
import { resetDecks } from "../utils/api";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

const Settings = ({ navigation }) => {
  const dispatch = useDispatch();

  const resetHandle = () => {
    dispatch(resetDecks());
    navigation.navigate("Deck List");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => resetHandle()}>
        <MaterialIcons name="reset-tv" size={60} color="black" />
        <Text style={styles.deckInfo}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
