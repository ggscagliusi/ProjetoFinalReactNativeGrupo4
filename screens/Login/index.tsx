import React from "react-native";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Pressable } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { auth } from "../../src/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

function cadastro(){

}

export default function Login() {
  const navigation = useNavigation();

  const [userMail, setUserMail] = useState("");
  const [userPass, setUserPass] = useState("");



  function userlogin() {
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Login Efetuado com sucesso!");
        console.log(user);
        navigation.navigate('Perfil')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        navigation.replace("Login")
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login</Text>
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

      <Pressable style={styles.formButton} onPress={userlogin}>
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
      <View style={styles.SubContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton} onPress={cadastro}>Cadastre-se</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
