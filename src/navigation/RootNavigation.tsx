import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootNavigationParamList} from '../types';
import {LoginContainer, SplashContainer} from '../containers';

const Stack = createStackNavigator<RootNavigationParamList>();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashContainer} />
        <Stack.Screen name="Login" component={LoginContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export {RootNavigation};
