import AsyncStorage from "@react-native-async-storage/async-storage";
export const APP_KEY = "flashCard:roger:app1";

export const decks = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};

function initializeDecks() {
  AsyncStorage.setItem(APP_KEY, JSON.stringify(decks));
  return decks;
}

export function formatDecksResults(results) {
  return results === null ? initializeDecks() : JSON.parse(results);
}
