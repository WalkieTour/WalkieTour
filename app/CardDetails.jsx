import {View,ScrollView,StyleSheet,Text,TouchableOpacity, Dimensions,ImageBackground, StatusBar,} from "react-native";
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { savedPlaces } from "./SavedReducer";
import { useSelector, useDispatch } from 'react-redux';

export default function CardDetails (){
     const params = useLocalSearchParams()
       const dispatch = useDispatch()
     const navigation = useNavigation()
  const tour = JSON.parse(params.tour)
  const {width,height} = Dimensions.get('screen')
   const savedHotels = useSelector((state) => state.saved.saved || [])
    const isSaved = savedHotels.some(h => h.id === tour.id)


   const handleToggleSave = () => {
    dispatch(savedPlaces(tour))
  }
  const savedTour = () =>{
dispatch(savedPlaces(router.params))
    router.replace('./StackNavigator')
  }


  
  return (
     <ScrollView 
     showsVerticalScrollIndicator={false}
     style={{backgroundColor:"white", paddingBottom:20}}>
      <StatusBar barStyle='light-content' translucent backgroundColor='rgba(0,0,0,0)' />

      <ImageBackground  source={{ uri: tour.images.image1 }} style={styles.headerImage}>
        <View style={styles.header}>
            <View style={{backgroundColor:"rgba(255, 247, 230, 1)", borderRadius:"50%"}}>
             <Ionicons style={{padding:5}} onPress={() =>{router.back('./Home')}} name="chevron-back" size={24} color="black" />
                </View>
           <TouchableOpacity onPress={handleToggleSave}>
             <MaterialCommunityIcons 
              name={isSaved ? "heart" : "heart-outline"} 
              size={30} 
              color={isSaved ? "red" : "white"} 
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>


      <View style={{marginTop:height*.01, paddingHorizontal:width*.04}}>
        <Text style={{fontSize:25,fontWeight:"bold"}}>{tour.name}</Text>
        <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:12,fontWeight:"400", marginTop:5,color:"gray", maxWidth:width*.7}}>{tour.location}</Text>
        <Text style={{marginTop:3, marginStart:width*.1,}}>  ⭐: {tour.rating}</Text>
        </View>
      </View>

      <View style={{marginHorizontal:width*.04,marginTop:height*.02}}>
        <Text style={{fontSize:16,color:"gray"}}>
       {tour.description}
        </Text>
        <Text style={{fontSize:16,color:"gray",marginTop:3}}>Best time to visit: {tour.bestTimeToVisit} </Text>
      
      </View>
     </ScrollView>
     
  );
};



 

const styles = StyleSheet.create({
  headerImage :{
    height :400,
    overflow:"hidden"
  },
  header:{
    marginTop:50,
    flexDirection:"row",
    alignItems:"center",
    marginHorizontal:20,
    justifyContent:"space-between"
  },
});