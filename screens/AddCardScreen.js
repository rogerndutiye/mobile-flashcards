import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import Styles, { primaryColor, thirdColor } from "../utils/styles";

import { saveCardToDeck } from "../store/deckSlice";

const AddCardScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const { deck } = route.params;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    dispatch(
      saveCardToDeck({
        title: deck,
        card: { answer: answer, question: question },
      })
    );
    navigation.navigate("DeckView", { deck: deck, cards: 0 });
  };

  return (
    <View style={Styles.container}>
      <View>
        <TextInput
          style={Styles.input}
          value={question}
          placeholder="Question"
          onChangeText={(text) => setQuestion(text)}
        />
      </View>

      <View>
        <TextInput
          style={Styles.input}
          value={answer}
          placeholder="Answer"
          onChangeText={(text) => setAnswer(text)}
        />
      </View>
      <TouchableOpacity
        style={[
          Styles.btn,
          question === "" || answer === ""
            ? { backgroundColor: thirdColor }
            : {
                backgroundColor: primaryColor,
              },
        ]}
        onPress={handleSubmit}
        disabled={question === "" || answer === ""}
      >
        <Text style={Styles.rbtnTitle}>Create Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCardScreen;
