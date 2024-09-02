import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-paper';
import images from '../api/images';
const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#D988FF" />
      <LinearGradient
        colors={['#D988FF', '#8B5CFF']}
        style={styles.linearGradient}>
        <ImageBackground source={images.bgWel} style={styles.bgImg}>
          <View style={styles.imgContainer}>
            <Image source={images.logo} />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.txtHead}>Connect With Friends</Text>
            <Text style={styles.txtPara}>
              Connect with friends, share what you're doing or see what's new
              from others around the world.
            </Text>
            <Button
            
              onPress={() => navigation.navigate('LoginScreen')}
              contentStyle={{height: 56}}
              labelStyle={styles.txtBtn}
              style={styles.btn}
              mode="contained">
              Sign in
            </Button>
            <Button
              onPress={() => navigation.navigate('SignupScreen')}
              contentStyle={{height: 56}}
              labelStyle={[styles.txtBtn, {color: '#fff'}]}
              style={styles.btn}
              mode="outlined">
              Create an Account
            </Button>
          </View>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  bgImg: {
    width: '100%',
    height: '100%',
  },
  txtHead: {
    fontSize: 48,
    color: '#fff',
    fontWeight: '600',
  },
  txtPara: {
    fontSize: 15,
    color: '#fff',
  },
  btn: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 17,
  },
  txtBtn: {
    color: '#8B5CFF',
    fontWeight: '700',
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  imgContainer: {
    flex: 0.8,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 60,
  },
});
export default WelcomeScreen;
