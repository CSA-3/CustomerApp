import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 
import Home from "../components/home"; 
import Registration from "../components/registration"; 
import Login from "../components/login";
import ForgotPassword from "../components/ForgotPassword";
import Blog from "../components/blog";
import Cart from "../components/cart";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {headerShown: false} 
    },
    Registration: {
        screen: Registration,
        navigationOptions: {headerShown: false} 
    },
    Login: {
        screen: Login,
        navigationOptions: {headerShown: false} 
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {headerShown: false} 
    },
    Blog: {
        screen: Blog,
        navigationOptions: {headerShown: false} 
    },
    Cart: {
        screen: Cart,
        navigationOptions: {headerShown: false} 
    },
}


const mainScreen = createStackNavigator(screens);
export default createAppContainer(mainScreen);

 
