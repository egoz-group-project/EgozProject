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
import EventCal from './pages/events/events';
import AddEvent from './pages/events/AddEvent';
import { Button } from 'react-native-elements';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
console.log(Drawer)
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

  const SignOut = ()=>{
    return(
    auth()
    .signOut()
    .then(()=> console.log('user signed out!'))
    );};

  if(user){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name='login' component={LoginScreen}/>
          <Stack.Screen name='SignUp' component={SignUpScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <NavigationContainer>
        <Drawer.Navigator screenOptions={{drawerPosition:'right'}}>
          <Drawer.Screen name='בית' component={Home}  />
          <Drawer.Screen name='פורטל משרות' component={Jobs} />
          <Drawer.Screen name='אודות' component={About} />
          <Drawer.Screen name='פורומים' component={Forum} />
          <Drawer.Screen name='עריכת פרופיל' component={Profile} />
          <Drawer.Screen name='לוח אירועים' component={EventCal} />
          <Drawer.Screen name='הוספת אירוע' component={AddEvent} />
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
})