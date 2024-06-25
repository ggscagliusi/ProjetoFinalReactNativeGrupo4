import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

export function Card({ titulo, informacao }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.informacao}>{informacao}</Text>
    </View>
  );
}
