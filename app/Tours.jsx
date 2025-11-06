import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, ScrollView, Text, StyleSheet, Dimensions, Image, FlatList, Pressable,TouchableOpacity} from "react-native";
import { useSelector } from "react-redux";
import { router } from "expo-router";
import { useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useUser } from "./UserContext";


export default function Tours (){
      const {width,height} = Dimensions.get("screen")
         const { profileImage } = useUser();
      const [showAll, setShowAll] = useState(false);
    const saved = useSelector((state) => state.saved.saved)
    console.log(saved)

    if (saved.length === 0) {
      
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.headerTitle}>Downloads</Text>
        </View>
           {profileImage && (
                        <Image 
                            source={{ uri: profileImage }} 
                            style={{ width: 50, height: 50, borderRadius: 25, marginRight:5 }} 
                        />
                    )}

        <View style={{alignItems:"center",marginTop:width/3}}>
        <View style={{backgroundColor:"rgba(252, 236, 201, 1)", padding:30, borderRadius:"50%"}}>
            <FontAwesome name="map-o" size={100} color="black" />
        </View>
          <Text style={{fontSize:30, fontWeight:"bold"}}>Download your first tour!</Text>
          <Text style={{fontSize:18, maxWidth:width*.8, textAlign:'center'}}>Download tours and audios ahead to explore freely without internet worries</Text>
        </View>
      </SafeAreaView>
    );
  }

   const displayData = showAll ? saved : saved.slice(0, 1);

return(
    <SafeAreaView>
        {profileImage && (
                            <Image 
                                source={{ uri: profileImage }} 
                                style={{ width: 50, height: 50, borderRadius: 25, marginStart:width*.4, marginTop:height*.05 }} 
                            />
                        )}
         <FlatList
        data={displayData}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ padding: 15 }}
        renderItem={({ item, index }) => (
         <View style={{backgroundColor:"rgba(221, 224, 227, 1)",marginHorizontal:10, borderRadius:20, padding:15,flexDirection:"row", marginBottom:5}}>
               
            <View>
                <Text style={{marginBottom:10, fontWeight:"600", fontSize:15}}>Saved</Text>
                <Pressable onPress={() => router.push({
                        pathname: '/CardDetails',
                        params: { 
                      tour: JSON.stringify(item)
                    }
                      })}>
            <Image style={{height:90, width:110, borderRadius:20}} source={{uri: item.images.image1}} />
            </Pressable>
         
            <Text style={{fontSize:10, marginTop:5}}> {item.name} </Text>
            </View>
              <View>
                   {
                  saved.length > 1 && (
                        <TouchableOpacity 
                            onPress={() => setShowAll(!showAll)}
                            style={{marginStart:width*.3}}
                        >
                            <Text>
                                {showAll ? "Show Less" : `Show All (${saved.length})`}
                            </Text>
                        </TouchableOpacity>
                    )
            }
            </View>
         </View>
         
        )}
      />
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },

  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
  bookingImage: {},
  card: {
    height: 150,
    width: "100%",
    elevation: 15,
    marginRight: 20,
    backgroundColor: "white",
    marginBottom: 30,
  },
   showAllButton: {
        backgroundColor: "rgba(232, 188, 93, 1)",
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 10,
        alignItems: "center",
    },
    showAllText: {
        fontSize: 16,
        fontWeight: "600",
        color: "black",
    }
});

