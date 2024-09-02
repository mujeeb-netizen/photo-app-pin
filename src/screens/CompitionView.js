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
import Icon from 'react-native-vector-icons/AntDesign';
const CompitionView = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <ImageBackground source={images.Photo} style={styles.bgProfile}>
        <Appbar.Header style={styles.bgHeader}>
          <Appbar.BackAction color="#fff" onPress={() => navigation.goBack()} />
        </Appbar.Header>
      </ImageBackground>
      <View style={styles.subContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.imgAv} source={images.avatar2} />
            <View style={{flexDirection: 'column', marginLeft: 10}}>
              <Text style={styles.name}>Brent Robertson</Text>
              <Text style={styles.loc}>31m ago</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="heart" size={16} color="red" />
              <Text style={styles.txtlc}>1125</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('CommentScreen')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 20,
                }}>
                <Image source={images.comment1} />
                <Text style={styles.txtlc}>348</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <Text style={styles.rHead}>Rules</Text>
        <Text style={styles.rNum}>• Picture Should be clear and not blur</Text>
        <Text style={styles.rNum}>• Picture Should be clear and not blur</Text>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('CreateCompetition')}>
        <LinearGradient
          colors={['#D988FF', '#8B5CFF']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.linearGradient}>
          <Text style={styles.lblSign}>Enter Competition</Text>
        </LinearGradient>
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.other}>Other Competitors </Text>
      <GridImg />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  subContainer: {
    backgroundColor: 'white',
    flex: 0.8,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 10,
  },
  bgHeader: {
    backgroundColor: 'transparent',
    elevation: 0,
    marginTop:40
  },
  bgProfile: {
    flex: 1.4,
    width: '100%',
  },
  linearGradient: {
    borderRadius: 15,
    height: 56,
    marginTop: 22,
  },
  lblSign: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginVertical: 17,
    textAlign: 'center',
  },
  name:{
    fontSize:15,
    fontWeight:'bold',
    color:'#2D3142'
  },
  loc:{
      color:'#1E2432',
      fontSize:11
  },
  imgAv:{
      width:30,
      height:30
  },
  txtlc:{
      fontSize:15,
      marginLeft:10
  },rHead:{
      fontSize:16,
      fontWeight:'600',
      color:'#0A1F44',
      marginTop:10
  },
  rNum:{
      fontSize:15,
      color:'#4C5980',

  },other:{
    fontSize:16,
    fontWeight:'600',
    color:'#0A1F44',
    marginLeft:10
  }

});
export default CompitionView;
