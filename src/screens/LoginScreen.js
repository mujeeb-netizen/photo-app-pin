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
import {Button, TextInput} from 'react-native-paper';
import images from '../api/images';
const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6FA" />
      <View style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: '20%',
          }}>
          <Image source={images.logos} />
        </View>
        <Text style={styles.txtHead}>Welcome Back!</Text>
        <Text style={styles.txtPara}>Hello there, sign in to continue!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            mode="flat"
            label="Email"
            style={styles.inputStyle}
            theme={{colors: {primary: '#949BB3'}}}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            mode="flat"
            label="Password"
            secureTextEntry
            style={styles.inputStyle}
            theme={{colors: {primary: '#949BB3'}}}
          />
        </View>
        <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
          <Button
            onPress={() => navigation.navigate('ForgetPassword')}
            style={{marginBottom: 20, marginTop: 5}}
            labelStyle={styles.lblForget}
            mode="text">
            Forgot Password?
          </Button>
        </View>
        <LinearGradient
          colors={['#D988FF', '#8B5CFF']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.linearGradient}>
          <Text style={styles.lblSign}>Sign In</Text>
        </LinearGradient>
      </View>
      <View style={{marginBottom: 20, justifyContent: 'flex-end'}}>
        <View style={styles.dontContainer}>
          <Text style={styles.txtAccount}>Don't have an account?</Text>
          <Button
            labelStyle={styles.lblAccount}
            mode="text"
            onPress={() => navigation.navigate('SignupScreen')}>
            Creat Account
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    paddingHorizontal: 20,
  },
  txtHead: {
    fontSize: 30,
    color: '#2D3142',
    fontWeight: 'bold',
  },
  txtPara: {
    fontSize: 16,
    color: '#4C5980',
  },
  lblForget: {
    color: '#FF8305',
    fontSize: 16,
    fontWeight: '500',
  },
  lblAccount: {
    color: '#8B5CFF',
    fontSize: 16,
    fontWeight: '500',
  },
  txtAccount: {
    fontSize: 16,
    fontWeight: '500',
  },
  lblSign: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginVertical: 17,
    textAlign: 'center',
  },
  linearGradient: {
    borderRadius: 15,
    height: 56,
  },
  dontContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: 22,
    height: 65,
    overflow: 'hidden',
  },
  inputContainer: {
    borderRadius: 4,
    height: 63,
    overflow: 'hidden',
    marginTop: 15,
  },
});
export default LoginScreen;
