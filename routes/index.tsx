import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import PrevisaoTempo from '../screens/PrevisaoTempo';
import Sobre from '../screens/Sobre';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import CustomDrawer from '../components/CustomDrawer';
import { useAuth } from '../src/context/AuthContext';
import { Alert } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerScreens = ({ navigation }) => {
  const { user } = useAuth();

  const handlePrevisaoTempo = () => {
    if (user) {
      navigation.navigate('Previsao do Tempo');
    } else {
      Alert.alert(
        'Acesso Negado',
        'Você precisa estar logado para acessar a Previsão do Tempo.',
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
      );
    }
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Previsao do Tempo"
            onPress={handlePrevisaoTempo}
          />
        </DrawerContentScrollView>
      )}
      screenOptions={{
        drawerActiveBackgroundColor: '#50009b',
        drawerInactiveBackgroundColor: '#fafaf2',
        drawerInactiveTintColor: '#000000',
        drawerActiveTintColor: '#fafaf2',
        drawerStyle: {
          backgroundColor: '#cccccc',
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  );
};

const Routes = () => {
  const { user } = useAuth();

  return (
   
      <Stack.Navigator>
        <Stack.Screen name="DrawerScreens" component={DrawerScreens} options={{ headerShown: false }} />
        {!user ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
        <Stack.Screen name="Previsao do Tempo" component={PrevisaoTempo} />
      </Stack.Navigator>
 
  );
};

export default Routes;
