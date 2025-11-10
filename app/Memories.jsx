import {View,ScrollView,Image,Text,TouchableOpacity, Dimensions,ImageBackground, FlatList} from "react-native";
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useUser } from "./UserContext";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as ImagePicker from "expo-image-picker"

export default function Memories (){
     const localImage = require('../assets/image/Onboarding1.png')
    const {width, height} = Dimensions.get('screen')
    const { memories, setMemories } = useUser();

    const pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        console.log("result", result)
        
        if (!result.canceled) {
            const imageUri = result.assets[0].uri;
            setMemories([...(memories || []), imageUri]);
        }
    }

    const removeImage = (index) => {
        const updatedMemories = memories.filter((_, i) => i !== index);
        setMemories(updatedMemories);
    }
    
     return(
        <ScrollView>
            <ImageBackground blurRadius={3} style={{height}} source={localImage}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Text style={{marginTop:height*.1, marginStart:width*.06}}>
                                <Ionicons name="chevron-back" size={24} color="black" />
                            </Text>
                        </TouchableOpacity>
                        <Text style={{fontSize:25, textAlign:"center", marginTop:height*.1, marginStart:width*.25, fontWeight:"bold"}}>Memories</Text>
                    </View>
                </View>

                <View style={{backgroundColor:"white", borderTopLeftRadius:10, borderTopRightRadius:10, height:height*.2, marginTop:height*.05, marginHorizontal:width*.03}}>
                    <Text style={{margin:10, fontWeight:"600"}}>STATISTICS</Text>
                    <View style={{backgroundColor:"rgba(230, 253, 236, 1)", width:width*.35, height:height*.09, margin:20, borderRadius:10, justifyContent:"center"}}>
                        <Text style={{fontSize:24, textAlign:"center", fontWeight:"bold"}}>
                            {memories?.length || 0}
                        </Text>
                        <Text style={{fontSize:12, textAlign:"center", color:"gray"}}>Photos Uploaded</Text>
                    </View>
                </View>

                <View style={{backgroundColor:"white", minHeight:height*.4, marginTop:height*.05, marginHorizontal:width*.03, padding:15, borderRadius:10}}>
                    {memories && memories.length > 0 ? (
                        <FlatList
                            data={memories}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={3}
                            scrollEnabled={false}
                            columnWrapperStyle={{justifyContent:"space-between", marginBottom:10}}
                            renderItem={({item, index}) => (
                                <View style={{position:"relative", width:width*.27, height:width*.27}}>
                                    <Image 
                                        source={{uri: item}} 
                                        style={{
                                            width:"100%", 
                                            height:"100%", 
                                            borderRadius:10
                                        }} 
                                    />
                                    {/* Delete Button */}
                                    <TouchableOpacity 
                                        onPress={() => removeImage(index)}
                                        style={{
                                            position:"absolute",
                                            top:5,
                                            right:5,
                                            backgroundColor:"rgba(0,0,0,0.6)",
                                            borderRadius:15,
                                            width:30,
                                            height:30,
                                            justifyContent:"center",
                                            alignItems:"center"
                                        }}
                                    >
                                        <Ionicons name="close" size={20} color="white" />
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    ) : (
                        <View style={{alignItems:"center", justifyContent:"center", height:200}}>
                            <FontAwesome name="image" size={50} color="#ccc" />
                            <Text style={{marginTop:10, color:"gray"}}>No memories yet</Text>
                        </View>
                    )}
                </View>

                <TouchableOpacity 
                    onPress={pickImage}
                    style={{
                        backgroundColor:"rgba(232, 188, 93, 1)",
                        padding:15,
                        borderRadius:10,
                        marginHorizontal:width*.03,
                        marginTop:20,
                        marginBottom:30,
                        alignItems:"center",
                        flexDirection:"row",
                        justifyContent:"center"
                    }}
                >
                    <Ionicons name="camera" size={24} color="black" style={{marginRight:10}} />
                    <Text style={{fontSize:16, fontWeight:"600"}}>Upload Image</Text>
                </TouchableOpacity>
            </ImageBackground>
        </ScrollView>
    )
}