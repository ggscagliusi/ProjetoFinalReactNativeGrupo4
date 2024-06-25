import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import Home from "../screens/Home";
import PrevisaoTempo from "../screens/PrevisaoTempo";
import Sobre from "../screens/Sobre";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Perfil from "../screens/Perfil";
import { useAuth } from "../src/context/AuthContext";
import { Alert } from "react-native";
import Feather from "react-native-vector-icons/Feather";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerScreens = () => {
  const { user } = useAuth();

  const handlePrevisaoTempo = ({ navigation }) => {
    if (user) {
      navigation.navigate("PrevisaoTempo");
    } else {
      Alert.alert(
        "Acesso Negado",
        "Você precisa estar logado para acessar a Previsão do Tempo.",
        [{ text: "OK", onPress: () => navigation.navigate("Login") }]
      );
    }
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "rgba(226, 226, 226, 0.0)",
          width: 250,
        },
        headerTintColor: "#15719f",
        drawerActiveBackgroundColor: "#15719f",
        drawerActiveTintColor: "#fff",
        drawerInactiveBackgroundColor: "#62a1c7",
        drawerInactiveTintColor: "#000",
        headerTransparent: true,
        ...TransitionPresets.BottomSheetAndroid,
      }}
    >
      {!user ? (
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            headerTitle: "",
            drawerIcon: ({ color, size }) => {
              return <Feather name="home" color={color} size={size} />;
            },
          }}
        />
      ) : null}
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{
          headerTintColor: "#15719f",
          headerTitle: "",
          headerTransparent: true,
          drawerIcon: ({ color, size }) => {
            return <Feather name="info" color={color} size={size} />;
          },
        }}
      />
      {user && (
        <Drawer.Screen
          name="Perfil"
          component={Perfil}
          options={{
            headerTintColor: "#15719f",
            headerTitle: "",
            headerTransparent: true,
            drawerIcon: ({ color, size }) => {
              return <Feather name="user" color={color} size={size} />;
            },
          }}
        />
      )}
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
          options={{
            headerTintColor: "#15719f",
            headerTitle: "",
            headerTransparent: true,
            drawerIcon: ({ color, size }) => {
              return (
                <Feather name="cloud-lightning" color={color} size={size} />
              );
            },
          }}
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
          options={{ headerShown: false, headerTransparent: true }}
        />
        {!user ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerTintColor: "#15719f",
                headerTitle: "",
                headerTransparent: true,
              }}
            />
            <Stack.Screen
              name="Cadastro"
              component={Cadastro}
              options={{
                headerTintColor: "#15719f",
                headerTitle: "",
                headerTransparent: true,
              }}
            />
          </>
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
