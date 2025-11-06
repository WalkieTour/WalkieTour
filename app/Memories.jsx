import {View,ScrollView,StyleSheet,Text,TouchableOpacity, Dimensions,ImageBackground, StatusBar,} from "react-native";
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "./UserContext";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as ImagePicker from "expo-image-picker"
import { useState } from "react";

export default function Memories (){
       const localImage = require('../assets/Image/Onboarding1.png')
       const {width, height} =Dimensions.get('screen')
          const [image, setImage] = useState(null)
             const { memories, setMemories } = useUser();


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
                         setMemories(imageUri);
                     }
             
                 setImage(result.assets[0].uri)
               }
    return(
        <ScrollView>
            <ImageBackground blurRadius={3} style={{height}} source={localImage}>
                <View style={{flexDirection:'row'}}>
                      <View style={{flexDirection:"row"}}>
            <Text style={{marginTop:height*.1,marginStart:width*.06, }}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </Text>
            <Text style={{fontSize:25, textAlign:"center", marginTop:height*.1, marginStart:width*.25, fontWeight:"bold" }}>Memories</Text>
        </View>
                </View>

                <View style={{backgroundColor:"white", borderTopLeftRadius:10, borderTopRightRadius:10, height:height*.2, marginTop:height*.05, marginHorizontal:width*.03}}>
                    <Text style={{margin:10}}>STATISTICS</Text>
                    <View style={{backgroundColor:"rgba(230, 253, 236, 1)", width:width*.3, height:height*.09, margin:20, borderRadius:10}}>
                        <Text style={{fontSize:12,textAlign:"center", marginTop:height*.03}}>Photos Uploaded</Text>
                    </View>
                </View>

                <View style={{backgroundColor:"white", height:height*.2, marginTop:height*.05, marginHorizontal:width*.03 }}>
                     {memories ? (
                <Image source={{uri: memories}} />
            ) : (
                <View style={{alignItems:"center"}}>
                         <FontAwesome style={{marginTop:70}} name="image" size={50} color="#ccc" />
                </View>
            )}
          
                </View>
                  <TouchableOpacity onPress={pickImage}>
                <Text>Upload Image</Text>
            </TouchableOpacity>
            </ImageBackground>
        </ScrollView>
    )
}