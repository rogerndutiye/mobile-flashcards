import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "../utils/styles";
import DockList from "../components/DockList";
import { getDecks, updateDecks } from "../utils/api";

let isInitial = true;

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDecks());
  }, [dispatch]);

  const deck = useSelector((state) => state.deck);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (deck.isUpdated) {
      updateDecks(deck.decks);
    }
  }, [deck]);

  return (
    <ScrollView style={styles.main}>
      {deck.decks &&
        Object.keys(deck.decks).map((title) => {
          const totalCard = deck.decks[title].questions.length;
          return <DockList key={title} title={title} totalCard={totalCard} />;
        })}
    </ScrollView>
  );
};
export default HomeScreen;
