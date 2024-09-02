import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Appbar} from 'react-native-paper';
import images from '../api/images';
const UploadPhoto = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <View style={styles.contentContainer}>
        <View style={{position: 'relative'}}>
          <Image source={images.userAvatar} />
          <Image style={styles.iconCamera} source={images.cameraIcon} />
        </View>
        <Text style={styles.txtHead}>Add Profile Picture</Text>
        <Text style={styles.txtPara}>
          Add a profile picture so that you and your friend can identify each
          other
        </Text>
      </View>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('ChooseGender')}>
        <LinearGradient
          colors={['#D988FF', '#8B5CFF']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.linearGradient}>
          <Text style={styles.lblSign}>Add a Photo</Text>
        </LinearGradient>
      </TouchableWithoutFeedback>
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
  linearGradient: {
    borderRadius: 15,
    height: 56,
    marginHorizontal: 20,
  },
  contentContainer: {
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 20,
  },
  lblSign: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginVertical: 17,
    textAlign: 'center',
  },
  iconCamera: {
    position: 'absolute',
    left: -15,
    top: -10,
  },
  txtHead: {
    color: '#172B4D',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
  txtPara: {
    fontSize: 15,
    color: '#7A869A',
    marginVertical: 18,
    textAlign: 'center',
  },
});
export default UploadPhoto;
