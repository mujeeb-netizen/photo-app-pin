import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import images from '../api/images';
import GridImg from '../components/GridImg';
import {Appbar} from 'react-native-paper';
const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="light-content" backgroundColor="#D988FF"      translucent={false} /> */}
      <LinearGradient
        colors={['#D988FF', '#8B5CFF']}
        style={styles.linearGradient}>
        <ImageBackground source={images.pr} style={styles.bgImg}>
          <Appbar.Header style={styles.bgHeader}>
            <Appbar.BackAction
              color="#fff"
              onPress={() => navigation.goBack()}
            />
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('CompitionView')}>
              <Image source={images.setting} />
            </TouchableWithoutFeedback>
          </Appbar.Header>

          <View style={{alignItems: 'center'}}>
            <Image source={images.Avatar} />
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginVertical: 15,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginRight: 10,
                  color: '#fff',
                }}>
                MacDonald
              </Text>
              <Image source={images.edit} />
            </View>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Image source={images.location} />
              <Text style={{fontSize: 12, marginLeft: 10, color: '#fff'}}>
                Los Angeles
              </Text>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
      <GridImg />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  linearGradient: {
    flex: 0.6,
  },
  bgHeader: {
    backgroundColor: 'transparent',
    elevation: 0,
    justifyContent: 'space-between',
    marginRight: 20,
  },
  bgImg: {
    width: '100%',
    height: '100%',
  },
});
export default ProfileScreen;
