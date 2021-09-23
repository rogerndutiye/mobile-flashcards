import AsyncStorage from "@react-native-async-storage/async-storage";
import { decks, formatDecksResults, APP_KEY } from "./_DATA";
import { populateData } from "../store/deckSlice";

export function getDecks() {
  return async (dispatch) => {
    const results = await AsyncStorage.getItem(APP_KEY);
    const decks = await formatDecksResults(results);
    dispatch(
      populateData({
        decks: decks,
      })
    );
  };
}

export function resetDecks() {
  try {
    return async (dispatch) => {
      await AsyncStorage.setItem(APP_KEY, JSON.stringify(decks));
      const results = await AsyncStorage.getItem(APP_KEY).then(
        formatDecksResults
      );
      dispatch(
        populateData({
          decks: results,
        })
      );
    };
  } catch (err) {
    console.log(err);
  }
}

export async function updateDecks(newDecks) {
  try {
    await AsyncStorage.setItem(APP_KEY, JSON.stringify(newDecks));
  } catch (err) {
    console.log(err);
  }
}

// export async function getDeck(title) {
//   const results = await AsyncStorage.getItem(APP_KEY);
//   const data = await formatDecksResults(results);
//   return data[title];
// }

// export async function saveDeckTitle(title) {
//   try {
//     await AsyncStorage.mergeItem(
//       APP_KEY,
//       JSON.stringify({
//         [title]: {
//           title,
//           questions: [],
//         },
//       })
//     );
//   } catch (err) {
//     console.error(
//       "AsyncStorage mergeItem() error inside saveDeckTitle() ",
//       err.message
//     );
//   }
// }

// export async function removeDeckTitle(title) {
//   try {
//     const results = await AsyncStorage.getItem(APP_KEY);
//     const data = await formatDecksResults(results);
//     data[title] = undefined;
//     delete data[title];
//     AsyncStorage.setItem(APP_KEY, JSON.stringify(data));
//   } catch (err) {
//     console.error(
//       "AsyncStorage setItem() error inside removeDeckTitle() ",
//       err.message
//     );
//   }
// }

// export async function saveCardToDeck(title, card) {
//   try {
//     const results = await AsyncStorage.getItem(APP_KEY);
//     const data = await formatDecksResults(results);
//     if (data[title] !== undefined) {
//       data[title].questions.push(card);
//       AsyncStorage.setItem(APP_KEY, JSON.stringify(data));
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// export const updateDecks = (newDecks) => {
//   return async (dispatch) => {
//     console.log("update");
//     console.log(newDecks);
//     try {
//       await AsyncStorage.setItem(APP_KEY, JSON.stringify(newDecks));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
