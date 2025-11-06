import {View,ScrollView,StyleSheet,Text,Image,FlatList,TextInput,TouchableOpacity,Dimensions,Pressable,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { lagosTouristCenters } from "./details";
import { useUser } from "./UserContext";


const Card = ({ tour, index, isLiked, onToggleLike, }) => {    
  const {width,height} =Dimensions.get("screen")
  return (
    <TouchableOpacity activeOpacity={1} 
    onPress={() => router.push({
        pathname: '/CardDetails',
        params: { 
      tour: JSON.stringify(tour)
    }
      })}
     >
    <View style={styles.card}>
      <View style={{ ...styles.cardOverlay, opacity: 0 }} />
      <View style={styles.priceTag}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          ₦{tour.price}
        </Text>
      </View>
      <Image source={{ uri: tour.images.image1 }} style={styles.cardImage} />
      <View>
        <View
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "bold", marginTop:height*.02 ,marginStart:width*.06}}>
              {tour.name}
            </Text>
          </View>
        </View>
        
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "rgb(12,66,94)", fontSize: 13, textAlign:"center",  marginStart:width*.25, }}>
                 ⭐: {tour.rating}
            </Text>
          </View>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};


export default function Home (){
    const {width,height} =Dimensions.get("screen")
       const { profileImage } = useUser();
return(
    <ScrollView>
        <View style={{height, width, backgroundColor:"rgba(255, 247, 230, 1)"}}>
            <View style={{flexDirection:"row"}}>

            <View style={{marginTop:height*.1, marginStart:width*.1,flexDirection:"row"}}>
              {profileImage && (
                <Image 
                    source={{ uri: profileImage }} 
                    style={{ width: 50, height: 50, borderRadius: 25, marginRight:5 }} 
                />
            )}

            <View>
                <Text style={{fontSize:20,fontWeight:"500"}}>Hi, Arya</Text>
                <Text style={{marginTop:height*.01}}>Lagos, Nigeria</Text>
                </View>

            </View>
                   <View style={{marginTop:height*.1, marginLeft:width*.4}}>
                    <Text>
              <MaterialIcons name="notifications-none" size={40} color="black"/>
              </Text>
              </View>
            </View>
           
            <View>
                <TextInput placeholder="Explore Destinations" placeholderTextColor={"grey"}
                style={{height:height*.05, backgroundColor:"white",padding:20, marginHorizontal:width*.06,marginTop:height*.02,borderRadius:5, borderWidth:1}}></TextInput>
            </View>
            <View style={{backgroundColor:"white", height:height*.17, borderRadius:20, marginHorizontal:width*.06,marginTop:height*.04}}>
              
               <View style={{flexDirection:"row"}}>
                <Text style={{margin:10,fontSize:20,fontWeight:"bold"}}>Popular</Text>
                <TouchableOpacity>
                <Text style={{marginTop:13, marginStart:width*.5}}>Show all</Text>
                </TouchableOpacity>
                </View>

                <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:20}}>
                    <Image style={{width:100, height:80, borderRadius:20}} source={require("../assets/Image/popular1.jpg")}/>
                    <Image style={{width:100, height:80, borderRadius:20}} source={require("../assets/Image/popular2.jpg")}/>
                    <Image style={{width:100, height:80, borderRadius:20}} source={require("../assets/Image/popular3.jpg")}/>
                </View>
            </View>



            <View style={{backgroundColor:"white", flexDirection:"row",marginHorizontal:15, marginTop:20, padding:5, borderRadius:10}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Recommended</Text>
                    <Text style={{marginStart:width*.4, marginTop:height*.002}}>Show all</Text>
                </View>
                  <ScrollView>
            <View>
             <FlatList
            horizontal
            data={lagosTouristCenters}
            contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20 }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <Card 
                tour={item} 
                index={index}
              
              />
            )}
          />
            
            </View>
        </ScrollView>
        </View>

      

    </ScrollView>
)
}

const styles = StyleSheet.create({
     card: {
    height: 280,
    width: 280,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: "white",
  },
  cardImage: {
    height: "60%",
    width: "90%",
    borderRadius: 15,
    alignSelf:"center"
   
  },
 
  cardOverlay: {
    height: 280,
    backgroundColor: "white",
    position: "absolute",
    zIndex: -1,
    width: 280,
    borderRadius: 15,
  },
})