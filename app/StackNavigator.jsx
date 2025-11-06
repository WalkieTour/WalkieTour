import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./Home";
import Tours from "./Tours"
import Memories from "./Memories";
import Profile from "./Profile"
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import React from "react";
import { useState, createContext,useContext } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';



export default function StackNavigator(){

    


      const Tab = createBottomTabNavigator();
      const Stack = createNativeStackNavigator();
    
      function BottomTabs() {
        return (
          <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: "green",  
                  tabBarInactiveTintColor: "gray", 
          }}>
            <Tab.Screen
              name="Explore"
              component={Home}
              options={{
                tabBarLabel: "Explore",
                headerShown: false,
                tabBarIcon: ({ focused, color }) =>
                  focused ? (
                    <FontAwesome5 name="compass" size={24} color="green" />
                  ) : (
                   <FontAwesome5 name="compass" size={24} color="black" />
                  ),
              }}
            />
    
            <Tab.Screen
            name="Tours"
              component={Tours}
              options={{
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                  focused ? (
                   <FontAwesome name="map-o" size={24} color="green" />
                  ) : (
                   <FontAwesome name="map-o" size={24} color="black" />
                  ),
              }}
            />
    
            <Tab.Screen
              name="Memories"
              component={Memories}
              options={{
                // tabBarLabel: "Bookings",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                  focused ? (
                   <FontAwesome name="image" size={24} color="green" />
                  ) : (
                  <FontAwesome name="image" size={24} color="black" />
                  ),
              }}
            />
    
             <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarLabel: "Profile",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                  focused ? (
                   <Ionicons name="person" size={24} color="green" />
                  ) : (
                 <Ionicons name="person-outline" size={24} color="black" />
                  ),
              }}
            />
          </Tab.Navigator>

          
        );
      }
    
    return (
       <NavigationIndependentTree>
       <NavigationContainer>
           <Stack.Navigator>
               <Stack.Screen options={{headerShown:false}} name="Main" component={BottomTabs} />
           </Stack.Navigator>
       </NavigationContainer>
       </NavigationIndependentTree>
)}