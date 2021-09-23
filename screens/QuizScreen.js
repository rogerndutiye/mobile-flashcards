import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import styles, { thirdColor, primaryColor, secondColor } from "../utils/styles";
import { useSelector } from "react-redux";
import { getPercent } from "../utils/helpers";
import { setLocalNotification, clearLocalNotification } from "../utils/helpers";

const QuizScreen = ({ route, navigation }) => {
  const { deck } = route.params;
  const decks = useSelector((state) => state.deck.decks);
  const questions = decks[deck].questions;

  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [inCorrectAnswers, setInCorrectAnswers] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const percent = getPercent(correctAnswers, correctAnswers + inCorrectAnswers);

  function moveToNextQuestion() {
    setShowAnswer(false);
    if (index + 1 !== questions.length) {
      setIndex(index + 1);
    } else {
      setShowQuestion(false);
      clearLocalNotification();
      setLocalNotification();
    }
  }

  function startOverQuiz() {
    setIndex(0);
    setShowAnswer(false);
    setCorrectAnswers(0);
    setInCorrectAnswers(0);
    setShowQuestion(true);
  }

  if (questions.length === 0) {
    return (
      <Card>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Sorry You cannot take a quiz because there are no cards in the deck.
        </Text>
      </Card>
    );
  }

  return (
    <ScrollView>
      <View>
        {showQuestion ? (
          <Card
            style={{
              width: "90%",
            }}
          >
            <Text style={styles.deckInfo}>
              {index} / {questions.length}
            </Text>
            <Text style={{ marginBottom: 5 }}> </Text>
            <Text style={styles.deckInfo}>
              {showAnswer ? questions[index].answer : questions[index].question}
            </Text>
            <Text style={{ marginBottom: 10 }}> </Text>

            <TouchableOpacity
              style={[
                styles.rbtn,
                {
                  width: "90%",
                  backgroundColor: thirdColor,
                },
              ]}
              onPress={() => setShowAnswer(!showAnswer)}
            >
              <Text
                style={[
                  styles.rbtnTitle,
                  {
                    color: primaryColor,
                    fontSize: 30,
                  },
                ]}
              >
                {showAnswer ? "Show Question " : "Show Answer"}
              </Text>
            </TouchableOpacity>

            {!showAnswer && (
              <>
                <View
                  style={{
                    flex: 2,
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <TouchableOpacity
                    style={[
                      styles.rbtn,
                      {
                        backgroundColor: secondColor,
                      },
                    ]}
                    onPress={() => {
                      moveToNextQuestion();
                      setCorrectAnswers(correctAnswers + 1);
                    }}
                  >
                    <Text style={styles.rbtnTitle}> Correct</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.rbtn}
                    onPress={() => {
                      moveToNextQuestion();
                      setInCorrectAnswers(inCorrectAnswers + 1);
                    }}
                  >
                    <Text style={styles.rbtnTitle}>Incorrect</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Card>
        ) : (
          <Card>
            <Text style={styles.deckInfo}>
              Correct Answers: {correctAnswers} out of {questions.length}
            </Text>
            <Text
              style={{
                marginTop: 20,
              }}
            ></Text>
            <Text style={styles.deckInfo}>Percentage correct : {percent}%</Text>

            <View
              style={{
                flex: 2,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <TouchableOpacity
                style={[
                  styles.rbtn,
                  {
                    backgroundColor: primaryColor,
                  },
                ]}
                onPress={startOverQuiz}
              >
                <Text style={styles.rbtnTitle}> Restart Quiz</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.rbtn,
                  {
                    backgroundColor: secondColor,
                  },
                ]}
                onPress={() => navigation.navigate("DeckView", { deck: deck })}
              >
                <Text style={styles.rbtnTitle}>Back to Deck</Text>
              </TouchableOpacity>
            </View>
          </Card>
        )}
      </View>
    </ScrollView>
  );
};

export default QuizScreen;
