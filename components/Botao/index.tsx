import { View, Text, Pressable } from "react-native";
import React from "react";

export function Botao({ style, onPress, disabled, text, textStyle }) {
  return (
    <>
      <Pressable style={style} onPress={onPress} disabled={disabled}>
        <Text style={textStyle}>{text}</Text>
      </Pressable>
    </>
  );
}
