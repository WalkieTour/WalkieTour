import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, Dimensions, Alert, Image } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useLocalSearchParams } from 'expo-router';



export default function TourMap() {
    const { width, height } = Dimensions.get('screen');
  const params = useLocalSearchParams();
  const tour = params.tour ? JSON.parse(params.tour) : null
  
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null)
  const [loading, setLoading] = useState(true)
  const [distance, setDistance] = useState(null)

  useEffect(() => {
    getUserLocation()
  }, [])

  const getUserLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location access is required to show directions');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High
      });

      const userCoords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      setUserLocation(userCoords);

      if (tour) {
        const dist = calculateDistance(
          userCoords.latitude,
          userCoords.longitude,
          tour.latitude,
          tour.longitude
        );
        setDistance(dist);

     
        setTimeout(() => {
          fitMapToMarkers(userCoords, {
            latitude: tour.latitude,
            longitude: tour.longitude
          });
        }, 1000);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error getting location:', error);
      Alert.alert('Error', 'Could not get your location');
      setLoading(false);
    }
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLon = (lon2 - lon1) * Math.PI / 180
    
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  const fitMapToMarkers = (start, end) => {
    if (mapRef.current) {
      mapRef.current.fitToCoordinates([start, end], {
        edgePadding: { top: 100, right: 50, bottom: 100, left: 50 },
        animated: true,
      })
    }
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="rgba(232, 188, 93, 1)" />
        <Text style={styles.loadingText}>Getting your location...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      {/* Map */}
      {userLocation && (
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
           <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
          {/* User Location Marker */}
          <Marker
            coordinate={userLocation}
            title="Your Location"
            pinColor="blue"
          >
            <View style={styles.userMarker}>
              <Ionicons name="person" size={20} color="white" />
            </View>
          </Marker>

          {/* Tour Location Marker */}
          <Marker
            coordinate={{
              latitude: tour.latitude,
              longitude: tour.longitude,
            }}
            title={tour.name}
            description={tour.location}
          >
            <View style={styles.tourMarker}>
              <Ionicons name="location" size={30} color="rgba(232, 188, 93, 1)" />
            </View>
          </Marker>

          <Polyline
            coordinates={[
              userLocation,
              { latitude: tour.latitude, longitude: tour.longitude }
            ]}
            strokeColor="rgba(232, 188, 93, 1)"
            strokeWidth={3}
            lineDashPattern={[1]}
          />
        </MapView>
      )}

     <View style={styles.infoCard1}>
            <Text> {tour.name} </Text>
          </View>
      {/* Bottom Card */}
      <View style={styles.infoCard}>
        
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Ionicons name="navigate" size={24} color="rgba(232, 188, 93, 1)" />
            <Text style={styles.infoLabel}>Distance</Text>
            <Text style={styles.infoValue}>
              {distance ? `${distance.toFixed(2)} km` : 'Calculating...'}
            </Text>

            
          </View>


          <View style={styles.divider} />
          <View style={styles.infoItem}>
            <Ionicons name="time" size={24} color="rgba(232, 188, 93, 1)" />
            <Text style={styles.infoLabel}>Est. Time</Text>
            <Text style={styles.infoValue}>
              {distance ? `${Math.ceil(distance * 2)} mins` : '--'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  backButton: {
    padding: 8,
    marginTop:50
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  map: {
    flex: 1,
  },
  userMarker: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'white',
  },
  tourMarker: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'rgba(232, 188, 93, 1)',
  },
    infoCard1: {
    position: 'absolute',
    bottom: 180,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  infoCard: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  infoItem: {
    alignItems: 'center',
    flex: 1,
  },
  divider: {
    width: 1,
    backgroundColor: '#e5e7eb',
    marginHorizontal: 10,
  },
  infoLabel: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
})