import { Stack } from "expo-router";
import { HeaderShownContext } from "@react-navigation/elements";
import Splash from "./Splash"
import React, { useEffect, useState } from "react";
import {useFonts} from "expo-font"




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
  <Stack screenOptions={{headerShown:false}}>
       <Stack.Screen options={{headerShown:false}} name="Splash" />
       <Stack.Screen name="Home" />
       <Stack.Screen  name="Register" />
       <Stack.Screen name="Login" />
       

  </Stack>
  );
}
