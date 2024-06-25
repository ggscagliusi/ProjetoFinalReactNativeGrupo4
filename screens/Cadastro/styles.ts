import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#95d6ea",
    alignItems: "center",
    justifyContent: "center",
  },
  formTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#15719f",
    textAlign:"center",
    margin: 10,
  },
  formInput: {
    borderColor: "#15719f",
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 22,
    width: 300,
    padding: 10,
    margin: 10,
  },
  formButton: {
    backgroundColor: "#15719f",
    width: 300,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  SubContainer: {
    flexDirection: "row",
    width: "80%",
  },
  subButton: {
    padding: 10,
  },
  subTextButton: {
    color: "#15719f",
    fontWeight: "bold",
  },
});
