import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <View style={styles.SubContainer}>
        <Text style={styles.formTitle}>Integrantes</Text>
        <Text>Douglas Tapajóz</Text>
        <Text>Guido Scagliusi</Text>
        <Text>Jordana Araujo</Text>
        <Text>Julia Nunes</Text>
        <Text>Lucas Voigt</Text>
        <Text>Marcos Netto</Text>
      </View>
      <View style={styles.SubContainer}>
        <Text style={styles.formTitle}>Agradecimentos</Text>
        <Text>Roni Schanuel</Text>
        <Text>Felipe Menegueli</Text>
      </View>
    </View>
  );
}
