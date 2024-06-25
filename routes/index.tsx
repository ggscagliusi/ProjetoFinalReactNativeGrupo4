import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import PrevisaoTempo from '../screens/PrevisaoTempo';
import Sobre from '../screens/Sobre';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
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
      <Drawer.Screen name="Previsao do Tempo" component={PrevisaoTempo} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  );
};

export default Routes;
