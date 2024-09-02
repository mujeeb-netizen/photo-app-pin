import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import images from '../api/images';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
const FullWidthScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ImageBackground source={images.Photo} style={styles.bgProfile}>
        <ImageBackground source={images.overlay} style={styles.bgImg}>
          <Appbar.Header style={styles.bgHeader}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image source={images.close} />
            </TouchableWithoutFeedback>
          </Appbar.Header>
          <View style={styles.subContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={images.avatar2} />
              <View style={{flexDirection: 'column', marginLeft: 10}}>
                <Text style={styles.name}>Mabelle Blake</Text>
                <Text style={styles.loc}>United State</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="heart" size={16} color="#fff" />
                <Text style={styles.txtlc}>1125</Text>
              </View>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('CommentScreen')}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 20,
                  }}>
                  <Image source={images.comment} />
                  <Text style={styles.txtlc}>348</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgHeader: {
    backgroundColor: 'transparent',
    elevation: 0,
    marginTop: 60,
    marginHorizontal: 20,
  },
  bgProfile: {
    width: '100%',
    height: '100%',
  },
  bgImg: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  loc: {
    fontSize: 13,
    color: '#fff',
  },
  txtlc: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 8,
  },
  subContainer: {
    marginHorizontal: 25,
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
});
export default FullWidthScreen;
