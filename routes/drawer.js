import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function  MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{ drawerLabel: 'Login' }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{ drawerLabel: 'Cart' }}
      />
    </Drawer.Navigator>
  );
}