import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 180,
    maxHeight: 180,
    margin:10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:5,
    backgroundColor: "rgba(226, 226, 226, 0.3)"
  },
  descricao: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#15719f",
    margin: 3,
    textAlign: "center"
  },

  imagem:{
    width: 80,
    height: 80,
    margin: -10,
  }
  
});
