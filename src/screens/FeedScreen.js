import React from 'react';
import {Image, SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import {Appbar} from 'react-native-paper';
import images from '../api/images';
import FeedItem from '../components/FeedItem';
const Data = [
  {
    id: '1',
    avatar: images.avatar1,
    cover: images.cover1,
    name: 'Mabelle Blake',
    location: 'United State',
  },
  {
    id: '2',
    avatar: images.avatar2,
    cover: images.cover2,
    name: 'Mabelle Blake',
    location: 'United State',
  },
  {
    id: '3',
    avatar: images.avatar3,
    cover: images.cover3,
    name: 'Mabelle Blake',
    location: 'United State',
  },
];
const FeedScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={false}
      />
      <Appbar.Header style={styles.bgHeader}>
        <Image source={images.logoss} />
        <View style={{position: 'relative'}}>
          <Image source={images.notification} />
          <Image style={styles.indication} source={images.notifIndicator} />
        </View>
      </Appbar.Header>
      <View style={styles.subContainer}>
        <FeedItem nav={navigation} Data={Data} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  bgHeader: {
    backgroundColor: '#fff',
    elevation: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  indication: {
    position: 'absolute',
    right: 0,
  },
  subContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
});
export default FeedScreen;
