import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

import Login from './screen/auth/login';
import Register from './screen/auth/register';

import Home from './screen/Home';
import Details from './screen/Details';

const App = () => {
  const [loaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  })

  const theme = {
    colors: {
      ...DefaultTheme.colors,
      backgroun: 'transparent'
    }
  }

  if (!loaded) return null;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
    >
      <NavigationContainer theme={theme} >
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />

          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </KeyboardAvoidingView>
  )
}

export default App