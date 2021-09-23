import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeDeckTitle, removeCard } from "../store/deckSlice";
import { Feather } from "@expo/vector-icons";
import Styles from "../utils/styles";

const DeckDetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { deck } = route.params;
  const decks = useSelector((state) => state.deck.decks);
  const totalCard = decks[deck].questions.length;
  const questions = decks[deck].questions;
  useEffect(() => {
    navigation.setOptions({ title: deck });
  }, []);

  const removeDeck = () => {
    dispatch(removeDeckTitle({ deck }));
    navigation.navigate("Deck List");
  };

  const removeCardHandle = (deck, card) => {
    dispatch(removeCard({ deck, card }));
  };

  return (
    <ScrollView>
      <View style={Styles.container}>
        <Text style={Styles.deckTitle}>{deck}</Text>
        <Text style={Styles.deckInfo}>
          {totalCard === 1
            ? totalCard + " Card"
            : totalCard === 0
            ? "No card"
            : totalCard + " cards"}
        </Text>
      </View>

      <View style={{ padding: 20 }}>
        {questions.map((q, index) => (
          <View style={Styles.cardList} key={index}>
            <Text style={{ marginLeft: 20, fontSize: 20 }}>
              {q.question.substring(0, 29) + "..."}
            </Text>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("Warning", "Do you want to delete this card ? ", [
                  {
                    text: "yes",
                    onPress: () => removeCardHandle(deck, q.question),
                  },
                  { text: "no" },
                ]);
              }}
              style={{ position: "absolute", right: 25 }}
            >
              <Feather name="delete" size={24} color="#F87171" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={{ flex: 3, flexDirection: "row", flexWrap: "wrap" }}>
        <TouchableOpacity
          style={Styles.card}
          onPress={() => navigation.navigate("AddCard", { deck: deck })}
        >
          <Feather name="edit-3" size={40} color="black" />
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.card}
          onPress={() => navigation.navigate("Quiz", { deck: deck })}
        >
          <Feather name="maximize-2" size={40} color="black" />
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.card} onPress={() => removeDeck()}>
          <Feather name="trash-2" size={40} color="#F87171" />
          <Text>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DeckDetailScreen;
