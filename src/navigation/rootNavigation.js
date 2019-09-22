import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import LoginScreen from '../components/sections/login/';
import RegisterScreen from '../components/sections/register'
import HomeScreen from '../components/sections/home';

const AppNavigator = createStackNavigator ({
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  }
},{
  initialRouterName: 'Login'
});

const HomeNavigator = createStackNavigator ({
  Home: {
    screen: HomeScreen
  }
},{
  initialRouterName: 'Home'
});

const SwitchNavigator = createSwitchNavigator({
  Auth: AppNavigator,
  Home: HomeNavigator
});

const CreateRootNavigator =  createAppContainer(SwitchNavigator);

export default CreateRootNavigator;
