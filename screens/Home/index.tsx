import React from "react";
import { View, Text, Image } from "react-native";
import { Botao } from "../../components/Botao";
import { styles } from "./style";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagemLogo}
        source={require("../../assets/logoWeatherMini.png")}
      />
      {/* <Text style={styles.title}>Bem-vindo ao nosso App!</Text> */}
      <View style={styles.buttonContainer}>
        <Botao
          style={styles.formButton}
          onPress={() => navigation.navigate("Login")}
          text="Login"
          textStyle={styles.textButton}
        />
        <Botao
          style={styles.formButton}
          onPress={() => navigation.navigate("Cadastro")}
          text="Cadastro"
          textStyle={styles.textButton}
        />
      </View>
    </View>
  );
};

export default Home;
