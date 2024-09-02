import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text,StatusBar, View} from 'react-native';
import {Appbar, TextInput, Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import images from '../api/images';
const CreateCompetition = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
            <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="#F4F6FA"
      />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <View style={{marginHorizontal:20}}>
        <Text style={styles.txtHead}>Create Competition</Text>
        <Text style={styles.txtPara}>
          Great, Please enter competition rules and the image!
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            mode="flat"
            label="Rule 1"
            style={styles.inputStyle}
            theme={{colors: {primary: '#949BB3'}}}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            mode="flat"
            label="Rule 2"
            style={styles.inputStyle}
            theme={{colors: {primary: '#949BB3'}}}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Button
            style={{marginBottom: 10}}
            labelStyle={styles.lblForget}
            mode="text">
            Add more rule
          </Button>
        </View>
        <View style={styles.imgContainer}>
          <Image source={images.download} />
          <Text style={styles.txtUpload}>Upload Image</Text>
          <Text style={styles.txtParaUpload}>
            Upload image or capture the image{' '}
          </Text>
          <Text style={styles.txtParaUpload}>for the competition</Text>
        </View>
        <LinearGradient
          colors={['#D988FF', '#8B5CFF']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.linearGradient}>
          <Text style={styles.lblSign}>Create Competition</Text>
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
  lblForget: {
    color: '#FF8305',
    fontSize: 15,
    fontWeight: '500',
  },
  imgContainer: {
    borderStyle: 'dashed',
    borderColor: '#8B5CFF',
    borderWidth: 1,
    height: 144,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtUpload: {
    fontSize: 15,
    color: '#2D3142',
    fontWeight: '700',
    marginVertical: 10,
  },
  txtParaUpload: {
    color: '#2D3142',
    fontSize: 13,
  },
});
export default CreateCompetition;
