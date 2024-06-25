import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#95d6ea",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#15719f",
    margin: 10,
  },
  subtitle: {
    fontSize: 20,
    color: "#15719f",
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
  formButtonDisabled: {
    backgroundColor: "#cccccc",
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
    width: 300,
    alignContent: "center",
  },
  subButton: {
    padding: 10,
  },
  subTextButton: {
    color: "#15719f",
    fontWeight: "bold",
  },
  image: {
    width: 150,
    height: 150,
    borderColor:"#15719f",
    borderWidth:3,
    borderStyle:"solid",
    borderRadius: 75,
    marginBottom: 20,
  },
});
