import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  decks: {},
  isLoading: true,
  isUpdated: false,
};

const DeckSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {
    populateData(state, action) {
      state.decks = action.payload.decks;
    },
    removeDeckTitle: (state, action) => {
      const title = action.payload.deck;
      state.decks[title] = undefined;
      delete state.decks[title];
      state.isUpdated = true;
    },
    removeCard: (state, action) => {
      const title = action.payload.deck;
      const card = action.payload.card;
      const decks = state.decks;
      const questions = decks[title].questions.filter(
        (x) => x.question !== card
      );
      state.decks = {
        ...decks,
        [title]: {
          ...decks[title],
          questions: questions,
        },
      };
      state.isUpdated = true;
    },

    saveDeckTitle: (state, action) => {
      const title = action.payload.deckTitle;
      const decks = state.decks;
      state.decks = {
        ...decks,
        [title]: {
          title,
          questions: [],
        },
      };
      state.isUpdated = true;
    },
    saveCardToDeck: (state, action) => {
      const title = action.payload.title;
      const card = action.payload.card;
      const decks = state.decks;

      if (decks[title] !== undefined) {
        state.decks = {
          ...decks,
          [title]: {
            ...decks[title],
            questions: decks[title].questions.concat([card]),
          },
        };
        //decks[title].questions.push(card);
        state.isUpdated = true;
      }
    },
  },
});

export const {
  populateData,
  removeDeckTitle,
  saveDeckTitle,
  saveCardToDeck,
  removeCard,
} = DeckSlice.actions;
export default DeckSlice.reducer;
