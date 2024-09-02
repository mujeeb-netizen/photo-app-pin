import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput, Appbar, Button, Checkbox} from 'react-native-paper';
const SignupScreen = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6FA" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <ScrollView>
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.txtHead}>Create New Account</Text>
          <Text style={styles.txtPara}>
            Great, it’s a pleasure to have you here. Let’s get you setup.
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              mode="flat"
              label="First Name"
              textContentType="name"
              style={styles.inputStyle}
              theme={{colors: {primary: '#949BB3'}}}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="flat"
              label="Last Name"
              textContentType="name"
              style={styles.inputStyle}
              theme={{colors: {primary: '#949BB3'}}}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="flat"
              label="Email"
              textContentType="emailAddress"
              style={styles.inputStyle}
              theme={{colors: {primary: '#949BB3'}}}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="flat"
              label="Password"
              secureTextEntry
              textContentType="password"
              style={styles.inputStyle}
              theme={{colors: {primary: '#949BB3'}}}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="flat"
              label="Confirm Password"
              secureTextEntry
              textContentType="password"
              style={styles.inputStyle}
              theme={{colors: {primary: '#949BB3'}}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginRight: 30,
              marginTop: 10,
            }}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={styles.txtTerms}>
              by using this service, you agree to our Terms of Use and Privacy
              Policy
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('UploadPhoto')}>
            <LinearGradient
              colors={['#D988FF', '#8B5CFF']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.linearGradient}>
              <Text style={styles.lblSign}>Sign Up</Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
          <View style={{justifyContent: 'flex-end'}}>
            <View style={styles.dontContainer}>
              <Text style={styles.txtAccount}>Already have an account?</Text>
              <Button
                labelStyle={styles.lblAccount}
                mode="text"
                onPress={() => navigation.navigate('LoginScreen')}>
                Sign In
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  bgHeader: {
    backgroundColor: '#F4F6FA',
    elevation: 0,
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
    marginTop: 22,
  },

  inputStyle: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: 22,
    height: 66,
    overflow: 'hidden',
  },
  inputContainer: {
    borderRadius: 4,
    height: 63,
    overflow: 'hidden',
    marginTop: 15,
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
  dontContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTerms: {
    color: '#4C5980',
    fontSize: 15,
    marginTop: 5,
  },
});
export default SignupScreen;
