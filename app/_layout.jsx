import { Stack } from "expo-router";
import { HeaderShownContext } from "@react-navigation/elements";
import Splash from "./Splash"
import React, { useEffect, useState } from "react";
import {useFonts} from "expo-font"
import { UserProvider } from './UserContext';
import store from "./store"
import {Provider} from 'react-redux'




export default function RootLayout() {

 const [splash, setSplash] = useState(true)
  const [loaded, error] = useFonts({
      regular: require("../assets/fonts/Poppins/Poppins-Black.ttf")
    })
  useEffect( () =>{
      setTimeout( () => {
        setSplash(false)
      }, 5000)
    })

  if(splash || !loaded){
    return (
      <Splash/>
    )

  }

  return( 
    <Provider store={store}>
    <UserProvider>
  <Stack screenOptions={{headerShown:false}}>
       <Stack.Screen options={{headerShown:false}} name="Splash" />
       <Stack.Screen name="Home" />
       <Stack.Screen  name="Register" />
       <Stack.Screen name="Login" />
       <Stack.Screen name="Onboarding" />
       <Stack.Screen name="Tours" />
       <Stack.Screen name="Memories" />
       <Stack.Screen name="Profile" />
       <Stack.Screen name="StackNavigator" />
       <Stack.Screen name="CardDetails" />

  </Stack>
  </UserProvider>
  </Provider>
  );
}
