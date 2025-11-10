import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, ScrollView, TextInput, Dimensions, Text, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useEffect } from "react";
import { useUser } from "./UserContext";
import { Alert } from "react-native";
import { router } from "expo-router";

export default function MyAccount(){
    const {width,height} = Dimensions.get('screen')
        const { userInfo, setUserInfo } = useUser()
    
    const [fullName, setFullName] = useState(userInfo.fullName || "")
    const [phone, setPhone] = useState(userInfo.phone || "")
    const [email, setEmail] = useState(userInfo.email || "")

      useEffect(() => {
        setFullName(userInfo.fullName || "");
        setPhone(userInfo.phone || "");
        setEmail(userInfo.email || "");
    }, [userInfo]);

    const handleSave = () => {
        if (!fullName || !phone || !email) {
            Alert.alert("Error", "Please fill in all fields");
            return;
        }

        
        setUserInfo({
            fullName,
            phone,
            email
        });

        Alert.alert("Success", "Your information has been saved!");
        router.back();
    };
    return(
        <SafeAreaView>
               <View style={{flexDirection:"row"}}>
            <Text style={{marginTop:height*.05,marginStart:width*.06, }}>
                <Ionicons onPress={()=> router.back()} name="chevron-back" size={24} color="black" />
            </Text>
            <Text style={{fontSize:25, textAlign:"center", marginTop:height*.042, marginStart:width*.2, fontWeight:"bold" }}>My Account</Text>
        </View>

        <View style={{marginHorizontal:width*.07, height:height*.5, marginTop:height*.1}}>
            <Text style={{color:"#ccc", fontSize:18, marginBottom:height*.01}}>Full Name</Text>
            <TextInput value={fullName} onChangeText={setFullName} style={{borderBottomWidth:1,borderBottomColor:"black", height:height*.06 }} />
            

     <Text style={{color:"#ccc", fontSize:18, marginBottom:height*.01}}>Phone Number</Text>
            <TextInput keyboardType="phone-pad" value={phone} onChangeText={setPhone} style={{borderBottomWidth:1,borderBottomColor:"black", height:height*.06 }} />
          

             <Text style={{color:"#ccc", fontSize:18, marginBottom:height*.01}}>E-mail</Text>
            <TextInput keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} style={{borderBottomWidth:1,borderBottomColor:"black", height:height*.06 }} />

        </View>

         <TouchableOpacity 
                        onPress={handleSave}
                        style={{backgroundColor: "rgba(232, 188, 93, 1)",padding: 15, borderRadius: 10,marginTop: 40,alignItems: "center", width:"40%", alignSelf:"center"}}>
                        <Text style={{fontSize: 16, fontWeight: "600"}}>Save Changes</Text>
                    </TouchableOpacity>
        </SafeAreaView>
    )
}