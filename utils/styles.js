import { StyleSheet } from "react-native";

export const backgroundColor = "#dfdfdf";
export const primaryColor = "#3730A3";
export const secondColor = "#818CF8";
export const thirdColor = "#ced4da";
export const btnPrimary = "#666";
export const btnprimarySecond = "#666";

const Styles = StyleSheet.create({
  barContainer: {
    flex: 1,
    backgroundColor: primaryColor,
  },
  main: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  decks: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 50,
    fontWeight: "700",
    marginTop: 10,
    height: 150,
    width: "100%",
    borderRadius: 30,
    borderColor: "#A5B4FC",
    borderWidth: 5,
  },
  deckTitle: {
    fontSize: 40,
    fontWeight: "700",
    borderBottomWidth: 2,
    borderColor: "red",
  },

  deckInfo: {
    fontSize: 20,
    fontWeight: "700",
  },

  container: {
    justifyContent: "center", //Centered horizontally
    alignItems: "center", //Centered vertically
    flex: 1,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    height: 80,
    borderRadius: 10,
    shadowColor: "#adb5bd",
    shadowOffset: { width: 0, height: 0.2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  cardList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "white",
    shadowColor: "#EFF6FF",
    shadowOffset: { width: 0, height: 0.2 },
    fontSize: 20,
    fontWeight: "700",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
    height: 60,
  },
  rbtn: {
    backgroundColor: "#F87171",
    width: "40%",
    marginTop: 40,
    marginLeft: 30,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  rbtnTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },

  btn: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    width: 300,
    borderRadius: 25,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "700",
  },

  input: {
    height: 48,
    width: 300,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    fontSize: 20,
  },
});

export default Styles;
