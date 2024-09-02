import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput, Appbar} from 'react-native-paper';
const ForgetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <View style={{marginHorizontal:20, marginTop:20}}>
        <Text style={styles.txtHead}>Reset Password</Text>
        <Text style={styles.txtPara}>
          Great, it’s a pleasure to have you here. Let’s get you setup.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            mode="flat"
            label="Email"
            style={styles.inputStyle}
            theme={{colors: {primary: '#949BB3'}}}
          />
        </View>

        <LinearGradient
          colors={['#D988FF', '#8B5CFF']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.linearGradient}>
          <Text style={styles.lblSign}>Reset Password</Text>
        </LinearGradient>
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
    height: 65,
    overflow: 'hidden',
  },
  inputContainer: {
    borderRadius: 4,
    height: 63,
    overflow: 'hidden',
    marginTop: 20,
  },
});
export default ForgetPassword;
