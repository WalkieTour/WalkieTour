import React from "react";
import { View, ImageBackground, Dimensions, ScrollView, Text, TextInput,TouchableOpacity, StyleSheet,Alert } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
import { useState, useEffect } from "react";
import {auth} from "./firebase";
  import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register(){
 const localImage = require('../assets/Image/auth-img.png')
 const {width,height} = Dimensions.get('screen')
     const [passwordVisible, setPasswordVisible]= useState(false)
 const COLORS = { primary: "rgba(232, 188, 93, 1)", secondary:"rgba(240, 205, 122, 1)" };


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('User created:', user.email);
      })
      .catch((error) => alert(error.message));
  };

  
    return(
        <ScrollView  showsVerticalScrollIndicator={false}
     style={{backgroundColor:"white", paddingBottom:20}}>
                 <View style={{ backgroundColor:"white", height:height*.35, }}>
                    <ImageBackground style={{flex:1, width:width, height:height}} source={localImage} /> 
                </View>  
                  <View style={{backgroundColor:"white", height:height*.65, borderTopRightRadius:50, borderTopLeftRadius:50}}>
                    <Text 
                    style={{fontSize:30, fontWeight:"600", margin:25}}
                    >Register</Text>


                             {/*  Name */}
                    <View style={{flexDirection:"row", borderBottomWidth:2,borderBlockColor:"grey", marginHorizontal:width*.06, marginBottom:height*.02}}>
                        <View>
                            <Ionicons style={{marginStart:width*.05,margin:15}} name="person-outline" size={20} color="black" />
                        </View>
                        <TextInput style={styles.textInput} placeholder="Name" placeholderTextColor={"grey"} >
                        </TextInput>        
                    </View>

                    {/* Email */}

                    <View style={{flexDirection:"row", borderBottomWidth:1,borderBlockColor:"black", marginHorizontal:width*.06, marginBottom:height*.02}}>
                        <View>
                            <Feather  style={{marginStart:width*.05,margin:15}}  name="mail" size={20} color="black" />
                        </View>
                        <TextInput  onChangeText={text => setEmail(text)} value={email} style={styles.textInput} placeholder="Email Address" placeholderTextColor={"grey"} >
                        </TextInput>        
                    </View>

                    {/* Password */}
                   <View style={{flexDirection:"row", borderBottomWidth:1,borderBlockColor:"black", marginHorizontal:width*.06, marginBottom:height*.03}}>
                        <TextInput value={password} onChangeText={text => setPassword(text)} secureTextEntry={passwordVisible} style={styles.textInput} placeholder="Password" placeholderTextColor={"grey"} >
                        </TextInput>    
                        <TouchableOpacity style={{margin:15}}  onPress={() =>{
                            setPasswordVisible(!passwordVisible)
                        }}>
                            <Text>
                                 {passwordVisible ? <AntDesign  name="lock" size={24} color="black" /> : <AntDesign name="unlock" size={24} color="black" />}
                            </Text>
                        </TouchableOpacity> 
                    </View>

                    {/* Register Button */}
                    <TouchableOpacity onPress={handleRegister} style={{backgroundColor:COLORS.primary, height:50,marginHorizontal:25,borderRadius:50}}>
                        <Text style={{textAlign:"center", fontSize:18, marginTop:height*.015}}>Register</Text>
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
                        <Text style={{color:"grey", marginRight:5}}>Account have an account?</Text>
                        <TouchableOpacity onPress={()=>router.back('./Login')}>
                        <Text>Login</Text>
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