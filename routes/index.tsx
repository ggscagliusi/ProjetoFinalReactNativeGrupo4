import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import PrevisaoTempo from "../screens/PrevisaoTempo";
import Sobre from "../screens/Sobre";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Perfil from "../screens/Perfil";
import { useAuth } from "../src/context/AuthContext";
import { Alert } from "react-native";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerScreens = () => {
  const { user } = useAuth();

  const handlePrevisaoTempo = ({ navigation }) => {
    if (user) {
      navigation.navigate("Previsao do Tempo");
    } else {
      Alert.alert(
        "Acesso Negado",
        "Você precisa estar logado para acessar a Previsão do Tempo.",
        [{ text: "OK", onPress: () => navigation.navigate("Login") }]
      );
    }
  };

  return (
    <Drawer.Navigator>
      {!user ? <Drawer.Screen name="Home" component={Home} /> : null}
      <Drawer.Screen name="Sobre" component={Sobre} />
      {user && <Drawer.Screen name="Perfil" component={Perfil} />}
      {user && (
        <Drawer.Screen
          name="Previsao do Tempo"
          component={PrevisaoTempo}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              handlePrevisaoTempo({ navigation });
              e.preventDefault();
            },
          })}
        />
      )}
    </Drawer.Navigator>
  );
};

const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerScreens"
          component={DrawerScreens}
          options={{ headerShown: false }}
        />
        {!user ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
          </>
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
