import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PrevisaoTempo from "../screens/PrevisaoTempo";
import Sobre from "../screens/Sobre";
import CustomDrawer from "../components/CustomDrawer";

export default function Routes() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerActiveBackgroundColor: "#50009b",
        drawerInactiveBackgroundColor: "#fafaf2",
        drawerInactiveTintColor: "#000000",
        drawerActiveTintColor: "#fafaf2",
        drawerStyle: {
          backgroundColor: "#cccccc",
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Previsao do Tempo" component={PrevisaoTempo} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  );
}
