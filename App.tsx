import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes/index";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
