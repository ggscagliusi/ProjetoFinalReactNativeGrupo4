// screens/Perfil.tsx

import React from "react";
import { View, Text, Image } from "react-native";
import { Botao } from "../../components/Botao";
import { useAuth } from "../../src/context/AuthContext";
import { styles } from "./style";

const Perfil = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Falha ao deslogar: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/iconPerfil.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Bem-vindo!</Text>
      {user && <Text style={styles.subtitle}>{user.email}</Text>}
      <Botao
        style={styles.formButton}
        onPress={handleLogout}
        text="Logout"
        textStyle={styles.textButton}
      />
    </View>
  );
};

export default Perfil;
