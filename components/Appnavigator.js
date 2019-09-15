import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './Home';
import Verification from './Verification';
import Registration from './Registration';
import Interests from './Interests';
import UserHome from './UserHome';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header:null,
      headerLeft: null,
    },
  },
  Verification: {
    screen: Verification,
    navigationOptions: {
      header:null,
      headerLeft: null,
    },
  },
  Registration: {
    screen: Registration,
    navigationOptions: {
      header:null,
      headerLeft: null,
    },
  },
  Interests: {
    screen: Interests,
    navigationOptions: {
      header:null,
      headerLeft: null,
    },
  },
  UserHome: {
    screen: UserHome,
    navigationOptions: {
      header:null,
      headerLeft: null,
    },
  },
});

export default createAppContainer(AppNavigator);
