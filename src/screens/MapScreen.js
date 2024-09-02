import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TextInput,
} from 'react-native';
import MapView from 'react-native-maps';
import {Appbar} from 'react-native-paper';
import images from '../api/images';
const MapScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={false}
      />
      <Appbar.Header style={styles.bgHeader}>
        <View style={styles.hd}>
          <Image source={images.logoss} />
          <View style={{position: 'relative'}}>
            <Image source={images.notification} />
            <Image style={styles.indication} source={images.notifIndicator} />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image source={images.search} />
            <TextInput
              placeholder="Search Location"
              placeholderTextColor="#4C5980"
              selectionColor="#4C5980"
              style={styles.inputTxt}
            />
          </View>
        </View>
      </Appbar.Header>
      <MapView
      style={styles.mapSize}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mapSize:{
    width:'100%',
    height:'100%'

  },
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  hd: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  bgHeader: {
    backgroundColor: '#fff',
    elevation: 0,
    flexDirection: 'column',
    paddingHorizontal: 20,
    height: 140,
  },
  indication: {
    position: 'absolute',
    right: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: '#F5F6FA',
    height: 62,
    paddingHorizontal: 20,
    width: '100%',
    marginVertical: 15,
  },
  inputTxt: {
    fontSize: 16,
    fontWeight: '500',
    width: '85%',
    marginLeft: 10,
    color: '#4C5980',
  },
});
export default MapScreen;
