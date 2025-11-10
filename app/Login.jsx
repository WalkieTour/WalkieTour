import React from "react";
import { View, ImageBackground, Dimensions, ScrollView, Text, TextInput,TouchableOpacity, StyleSheet, Alert } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useNavigation } from "expo-router";
import { useState, useEffect } from "react";
import {auth }from "./firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import Home from "./Home"
import StackNavigator from "./StackNavigator";


export default function Login(){
    const {width,height} = Dimensions.get('screen')
     const [passwordVisible, setPasswordVisible]= useState(false)
        const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

     const localImage = require('../assets/image/auth-img.png')
     const COLORS = { primary: "rgba(232, 188, 93, 1)", secondary:"rgba(240, 205, 122, 1)" };

     
      const navigation = useNavigation()
  useEffect(()=> {
   const unsubscribe = auth.onAuthStateChanged(user =>{
      if(user){
        navigation.replace("StackNavigator")
      }
    })
    return unsubscribe
  },[])


  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user
        console.log('logged in with', user.email)
      })
      .catch((error) => {
        Alert.alert("Login Error", "Invalid Credentials")
        console.error(error)
      })
  }


    return (
           <ScrollView  showsVerticalScrollIndicator={false}
     style={{backgroundColor:"white", paddingBottom:20}}>
                 <View style={{ backgroundColor:"white", height:height*.35, }}>
                    <ImageBackground style={{flex:1, width:width, height:height}} source={localImage} /> 
                </View>  
                  <View style={{backgroundColor:"white", height:height*.65, borderTopRightRadius:50, borderTopLeftRadius:50}}>
                    <Text 
                    style={{fontSize:30, fontWeight:"600", margin:25}}
                    >Login</Text>


                    {/* Email */}

                    <View style={{flexDirection:"row", borderBottomWidth:1,borderBlockColor:"black", marginHorizontal:width*.06, marginBottom:height*.02}}>
                        <View>
                            <Feather  style={{marginStart:width*.05,margin:15}}  name="mail" size={20} color="black" />
                        </View>
                        <TextInput keyboardType="email-address" autoCapitalize="none" onChangeText={text => setEmail(text)} value={email} style={styles.textInput} placeholder="Email Address" placeholderTextColor={"grey"} >
                        </TextInput>        
                    </View>

                    {/* Password */}
                   <View style={{flexDirection:"row", borderBottomWidth:1,borderBlockColor:"black", marginHorizontal:width*.06, marginBottom:height*.03}}>
                        <TextInput secureTextEntry={!passwordVisible} style={styles.textInput} placeholder="Password" placeholderTextColor={"grey"} value={password} onChangeText={text => setPassword(text)}>
                        </TextInput>    

                        <TouchableOpacity style={{margin:15}} onPress={() => {
                            setPasswordVisible(!passwordVisible)
                        }}>
                            <Text>
                        {passwordVisible ? <AntDesign  name="unlock" size={24} color="black" /> : <AntDesign name="lock" size={24} color="black" />}
                        </Text>
                        </TouchableOpacity>   
                    </View>

                    {/* Login Button */}
                    <TouchableOpacity onPress={handleLogin} style={{backgroundColor:COLORS.primary, height:50,marginHorizontal:25,borderRadius:50}}>
                        <Text style={{textAlign:"center", fontSize:18, marginTop:height*.015}}>Login</Text>
                    </TouchableOpacity>


                    <View style={{flexDirection:"row", justifyContent:'space-between', marginTop:height*.05, marginHorizontal:29}}>
                        <TouchableOpacity style={{backgroundColor:COLORS.secondary, height:20, height:50,width:80, borderRadius:10}} >
                            <Text style={{textAlign:"center", padding:10}}>
                                <AntDesign name="google" size={24} color="black" />
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={{backgroundColor:COLORS.secondary, height:20, height:50,width:80, borderRadius:10}}>
                            <Text style={{textAlign:"center", padding:10}}>
                               <AntDesign name="apple" size={24} color="black" />
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={{backgroundColor:COLORS.secondary, height:20, height:50,width:80, borderRadius:10}}> 
                            <Text style={{textAlign:"center", padding:10}}>
                               <Feather name="facebook" size={24} color="black" />
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", alignSelf:"center", marginTop:height*.06}}>
                        <Text style={{color:"grey", marginRight:5}}>New user?</Text>
                        <TouchableOpacity onPress={()=>router.push('./Register')}>
                        <Text>Register Now</Text>
                        </TouchableOpacity>
                    </View>

                    </View> 
            
             
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textInput:{
        height:50,
        width:"80%",
        alignContent:"center",
        padding:5,
        

    }
})