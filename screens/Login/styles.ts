import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  formTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#50009b",
    margin: 10,
  },
  formInput: {
    borderColor: "#50009b",
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 22,
    width: 300,
    padding: 10,
    margin: 10,
  },
  formButton: {
    backgroundColor: "#50009b",
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
    color: "#50009b",
    fontWeight: "bold",
  },
});
