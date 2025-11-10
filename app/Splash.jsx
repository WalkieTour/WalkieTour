import {Text, View, Image, Dimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router"

export default function Splash (){
    setTimeout( () =>{
        router.navigate('./Onboarding')
     }, 3000)

    const {width,height} = Dimensions.get("screen")

     return (
         <SafeAreaView style={{justifyContent:"center", flex:1, alignItems:"center",backgroundColor:"white"}}>
           <Image
         
            source={require("../assets/image/WalkieTour-logo.png")}></Image>
            

    </SafeAreaView>
     )
}