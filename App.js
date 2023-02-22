import { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { authUser } from './firebase';
import { onAuthStateChanged, User, signInWithEmailAndPassword } from 'firebase/auth';

const Stack = createStackNavigator();

import Login from './screen/auth/login';
import Register from './screen/auth/register';

import Home from './screen/Home';
import Details from './screen/Details';

const App = () => {
  const [user, setUser] = useState(User);
  const [ loading, setLoading ] = useState(true);
  const [loaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  })

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(authUser, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setUser(user);
            setLoading(false);
        } else {
            // User is signed out
            setUser(undefined);
            setLoading(false);
        }
    });

    return unsubscribeFromAuthStatuChanged;
}, []);

  const theme = {
    colors: {
      ...DefaultTheme.colors,
      backgroun: 'transparent'
    }
  }

  if (!loaded || loading) return null;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
    >
      <NavigationContainer theme={theme} >
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
          {
            !user
              ?
              <>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={Register} />
              </>
              :
              <>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Details' component={Details} />
              </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </KeyboardAvoidingView>
  )
}

export default App