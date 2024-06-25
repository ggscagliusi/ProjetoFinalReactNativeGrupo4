import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  buttonContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  formButton: {
    backgroundColor: "#50009b",
    width: 150,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
