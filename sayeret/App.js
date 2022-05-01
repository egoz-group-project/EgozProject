import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './firebase';

import LoginScreen from './pages/Login/Login'; 
import Forum from './pages/Forum/Forum';
import Home from './pages/home/Home';
import Jobs from './pages/jobs/Jobs';
import About from './pages/About/About';
import SignUpScreen from './pages/Login/SignUp';
import Profile from './pages/myInfo/myInfo';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
  }
  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if(!user){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name='login' component={LoginScreen}/>
          <Stack.Screen name='SignUp' component={SignUpScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    // <><View style={styles.container}>
    //   <UploadImage />
    //   <Text style={{ marginVertical: 20, fontSize: 16 }}>Welcome, FuzzySid</Text>
    // </View>
    <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='jobs' component={Jobs} />
          <Drawer.Screen name='about' component={About} />
          <Drawer.Screen name='forum' component={Forum} />
          <Drawer.Screen name='Profile' component={Profile} />
          </Drawer.Navigator>
      </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});