import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/firebase.config";

export default function Cadastro() {
  const [userMail, setUserMail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userRepass, setUserRePass] = useState("");

  function cadastro() {
    if (userMail === "" || userPass === "" || userRepass === "") {
      alert("Todos os campos devem ser preenchidos!");
      return;
    }
    if (userPass !== userRepass) {
      alert("a senha digitada não pode ser diferente");
      return;
    } else {
      createUserWithEmailAndPassword(auth, userMail, userPass).then(
        (UserCredential) => {
          const user = UserCredential.user;
          alert("cadastro efetuado com sucesso!");
        }
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Cadastro</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Informe seu E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={userMail}
        onChangeText={setUserMail}
      ></TextInput>

      <TextInput
        style={styles.formInput}
        placeholder="Informe sua Senha"
        autoCapitalize="none"
        secureTextEntry
        value={userPass}
        onChangeText={setUserPass}
      ></TextInput>

      <TextInput
        style={styles.formInput}
        placeholder="Repita sua Senha"
        autoCapitalize="none"
        secureTextEntry
        value={userRepass}
        onChangeText={setUserRePass}
      ></TextInput>

      <Pressable style={styles.formButton} onPress={cadastro}>
        <Text style={styles.textButton}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}
