import { View, TouchableOpacity, Text,  Dimensions, Pressable, StyleSheet, Image} from "react-native"
import React, { useState } from "react"
import { useNavigation } from "expo-router";
import { router } from "expo-router";
import { auth } from "./firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import * as ImagePicker from "expo-image-picker"
import { useUser } from "./UserContext";


export default function Profile (){
    const [image, setImage] = useState(null)
      const { profileImage, setProfileImage, userInfo } = useUser();
     const { width, height } = Dimensions.get("screen");
  const navigation = useNavigation()
  const handleSignOut =() =>{
    auth
    .signOut()
    .then(() =>{
        router.replace('./Login')
    })
    .catch(error =>alert(error.message))

  }

  const pickImage = async() =>{
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:["images"],
        allowsEditing:true,
        aspect: [4,3],
        quality:1
    })
    console.log("result", result)
     if (!result.canceled) {
            const imageUri = result.assets[0].uri;
            setProfileImage(imageUri);
        }

    setImage(result.assets[0].uri)
  }
    return(
    <SafeAreaView>
        {/* header */}
        <View style={{flexDirection:"row"}}>
            <Text style={{marginTop:height*.05,marginStart:width*.06, }}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </Text>
            <Text style={{fontSize:25, textAlign:"center", marginTop:height*.05, marginStart:width*.3, fontWeight:"bold" }}>Profile</Text>
        </View>

        {/* Profile Image Area */}
        <View style={styles.profileContainer}>

             {profileImage ? (
                <Image source={{uri: profileImage}} style={styles.image} />
            ) : (
                <View style={styles.placeholderImage}>
                    <Feather style={{marginTop:height*.08}} name="user" size={70} color="#ccc" />
                </View>
            )}

              {/* Display User Name */}
               {userInfo.fullName ? (
            <Text style={{
                fontSize: 20, 
                fontWeight: "bold", 
                textAlign: "center", 
                 marginTop: height*.02}}>
                {userInfo.fullName}
            </Text>
        ) :(
            <Text  style={{
                fontSize: 20, 
                fontWeight: "bold", 
                textAlign: "center", 
                marginTop: height*.12}}>User</Text>
        )}

        </View>
         <TouchableOpacity onPress={pickImage} style={{marginStart:width*.6}}>
                <Feather name="camera" size={24} color="grey" />
            </TouchableOpacity>

        <View style={{marginTop:height*.1, marginHorizontal:width*.03, borderWidth:1, borderColor:"#e5e7eb", borderRadius:10, backgroundColor:"rgba(255, 255, 255, 1)"}}>
            <Pressable onPress={()=>router.push('./MyAccount')}>
            <Text style={{width:width*.9,fontSize:15, padding:17, borderBottomWidth:1, borderColor:"#e5e7eb", justifyContent:"space-between" }}>My Account</Text>
             </Pressable>
             <Pressable>
            <Text style={{fontSize:15, padding:17, borderBottomWidth:1, borderColor:"#e5e7eb", }}>Get Help</Text>
            </Pressable>
            <Pressable onPress={handleSignOut}>
            <Text style={{fontSize:15, padding:17, }}>Log out</Text>
            </Pressable>
        </View>

    </SafeAreaView>
    )
}

const styles= StyleSheet.create ({
    profileContainer:{
        backgroundColor:"white",
        height:220, 
        width:220,
        alignItems:"center",
        marginStart:90,
        marginTop:50,
        borderRadius:110

    },
    image:{
        width:"100%",
        height:"100%",
        borderRadius:110
    }
})
