import React from "react";
import {StyleSheet,Dimensions,FlatList,View,Image,Text,TouchableOpacity, ImageBackground,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const { width, height } = Dimensions.get("screen");

 const COLORS = { primary: "rgba(232, 188, 93, 1)", secondary:"rgba(240, 205, 122, 1)" }

const slides = [
  {
    id: "1",
    title: "Explore Without Limit",
    description: "Discover cities at your own pace, no guide needed just your curiosity",
    image: require("../assets/image/Onboarding1.png"),
  },
  {
    id: "2",
    title: "Listen, Learn & Experience",
    description: "Enjoy rich storytelling and history as you walk through each landmark",
    image: require("../assets/image/Onboarding2.png"),
  },
  {
    id: "3",
    title: "Go Offline Stay on Track",
    description: "Download tours and audio ahead and explore freely without internet worries",
    image: require("../assets/image/Onboarding3.png"),
  },
];

// const Slide = ({ item }) => {
//   return (
//     <View >
//       <ImageBackground
//         source={item.image}
//         style={{ height, width, resizeMode: "contain" }}
//       >
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//       </ImageBackground>
//     </View>
//   );
// };
const Onboarding = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
    const ref = React.useRef(null)
  const Slide = ({item}) => {
    return (
          <ImageBackground  style={{ height, width,}} source={item.image}>
            <View style={{marginTop:height*.7, marginStart:width*.05, marginBottom:height*.05}}>
            <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          </View>
      <View
        style={{
          height,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >

        
        <View
          style={{
            flexDirection: "row"
          }}>
            
            
           {slides.map((_,index)=>( 
            <View key={index} style={[styles.indicator, currentSlideIndex == index && {backgroundColor:COLORS.primary, width:25}]} />
            ))}
            

                 {
            currentSlideIndex == slides.length - 1 ?  <View style={{height:50, }}>
             <TouchableOpacity onPress={()=>router.navigate("./Login")} style={[styles.btn,]}>
                <Text style={{color:"white", fontWeight:"bold", fontSize:12}}>Register</Text>
            </TouchableOpacity>
          </View> :
            <View style={{flexDirection:"row"}}>
            <View style={{width:15}}></View>
             <TouchableOpacity onPress={goNextSlide} style={[styles.btn,]}>
                <Text style={{color:"white", fontWeight:"bold", fontSize:24,}}>→</Text>
            </TouchableOpacity>
        </View>
          }
        </View>
        <View style={{marginBottom:20}}>
     
         
       
      </View>
     
      </View>
       </ImageBackground>
    );
  };
  const updateCurrentSlideIndex = e =>{
    const contentOffsetX = e.nativeEvent.contentOffset.x
    const currentIndex = Math.round(contentOffsetX/width)
    setCurrentSlideIndex(currentIndex)
  }
  const goNextSlide =() => {
    const nextSlideIndex = currentSlideIndex + 1
    if (nextSlideIndex != slides.length){
        const offset = nextSlideIndex*width
    ref?.current?.scrollToOffset({offset})
    setCurrentSlideIndex(nextSlideIndex)
    
    }
  }

  const skip = () =>{
    const lastSlideIndex = slides.length -1 
    const offset = lastSlideIndex*width
     ref?.current?.scrollToOffset({offset})
         setCurrentSlideIndex(lastSlideIndex)
  }
  return (
    <View style={styles.container}>
      <FlatList
      ref={ref}
      onMomentumScrollEnd={updateCurrentSlideIndex}
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => <Slide item={item} />}
        pagingEnabled
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color:"white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "auto",
  },
  description: {
    fontSize: 15,
    marginTop: 10,
    maxWidth: "70%",
    color: "white",
    textAlign: "auto",
    lineHeight: 23,
  },
  indicator:{
    height:2.5,
    width:10,
    backgroundColor:"grey",
    marginHorizontal:3,
    borderRadius:2,
    // marginTop:height*.9,

  },
 btn :{
  height:50,
  width: 100,
  borderRadius:17,
  backgroundColor:COLORS.primary,
  justifyContent:"center",
  alignItems:"center",
  marginStart:width*.45,
//    marginTop:height*.87,
 
  
 }
});

export default Onboarding;
