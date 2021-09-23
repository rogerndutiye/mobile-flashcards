import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles, { primaryColor, thirdColor } from "../utils/styles";
import { useDispatch } from "react-redux";
import { saveDeckTitle } from "../store/deckSlice";

const AddDeckScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [deckTitle, setDeckTitle] = useState("");

  const handleSubmit = () => {
    dispatch(saveDeckTitle({ deckTitle }));
    navigation.navigate("DeckView", { deck: deckTitle, cards: 0 });
    setDeckTitle("");
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 60 }} />
      <View style={styles.block}>
        <Text style={styles.deckInfo}>What is the title of your new deck?</Text>
      </View>
      <View style={[styles.block]}>
        <TextInput
          style={styles.input}
          placeholder="Deck Name"
          autoFocus={true}
          returnKeyType="done"
          name={deckTitle}
          value={deckTitle}
          autoFocus={true}
          onChangeText={(text) => setDeckTitle(text)}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.btn,
          deckTitle === ""
            ? { backgroundColor: thirdColor, marginTop: 20 }
            : {
                backgroundColor: primaryColor,
                marginTop: 20,
              },
        ]}
        onPress={handleSubmit}
        disabled={deckTitle === ""}
      >
        <Text style={styles.rbtnTitle}>Create Deck</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddDeckScreen;
