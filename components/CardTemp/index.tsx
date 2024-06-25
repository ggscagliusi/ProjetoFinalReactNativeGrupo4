import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

export function CardTemp({ informacao }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{informacao}</Text>
    </View>
  );
}
