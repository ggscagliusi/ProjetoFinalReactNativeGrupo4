import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";

export function CardCeu({ codImagem, descricao }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={{ uri: `http://openweathermap.org/img/wn/${codImagem}@2x.png` }}
      />
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
}
