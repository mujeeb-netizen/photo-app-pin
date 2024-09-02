import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import images from '../api/images';
import Icons from '../components/Icon';
const ChooseGender = ({navigation}) => {
  const [toggle, setToggle] = useState('male');
  const [grad1, setGrad1] = useState('#D988FF');
  const [grad2, setGrad2] = useState('#8B5CFF');
  const [grad3, setGrad3] = useState('#fff');
  const [grad4, setGrad4] = useState('#fff');
  const [maleIcon, setMaleIcon] = useState('#fff');
  const [femaleIcon, setFemaleIcon] = useState('#4c5980');
  const [maleTxt, setMaleTxt] = useState('#8B5CFF');
  const [femaleTxt, setFemaleTxt] = useState('#4c5980');
  useEffect(() => {
    if (toggle === 'male') {
      setGrad1('#D988FF');
      setGrad2('#8B5CFF');
      setGrad3('#fff');
      setGrad4('#fff');
      setMaleIcon('#fff');
      setFemaleIcon('#4c5980');
      setMaleTxt('#8B5CFF');
      setFemaleTxt('#4c5980');
    } else {
      setGrad1('#fff');
      setGrad2('#fff');
      setGrad3('#D988FF');
      setGrad4('#8B5CFF');
      setMaleIcon('#4c5980');
      setFemaleIcon('#fff');
      setMaleTxt('#4c5980');
      setFemaleTxt('#8B5CFF');
    }
  }, [toggle]);
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.txtHead}>Which one are you?</Text>
        <Text style={styles.txtPara}>
          To give you a customize experience we need to know your gender
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <TouchableWithoutFeedback onPress={() => setToggle('male')}>
            <LinearGradient
              colors={[`${grad1}`, `${grad2}`]}
              style={styles.linearGradient}>
              <Icons name="male" color={maleIcon} />
            </LinearGradient>
          </TouchableWithoutFeedback>
          <Text style={[styles.lblGen, {color: maleTxt}]}>Male</Text>
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <TouchableWithoutFeedback onPress={() => setToggle('female')}>
            <LinearGradient
              colors={[`${grad3}`, `${grad4}`]}
              style={styles.linearGradient}>
              <Icons name="female" color={femaleIcon} />
            </LinearGradient>
          </TouchableWithoutFeedback>
          <Text style={[styles.lblGen, {color: femaleTxt}]}>Female</Text>
        </View>
      </View>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('BottomBar')}>
        <LinearGradient
          colors={['#D988FF', '#8B5CFF']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.linearGradients}>
          <Text style={styles.lblSign}>Continue</Text>
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
    borderRadius: 65,
    height: 134,
    width: 134,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtHead: {
    fontSize: 30,
    color: '#2D3142',
    fontWeight: 'bold',
  },
  txtPara: {
    fontSize: 16,
    color: '#4C5980',
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
  },
  lblGen: {
    fontSize: 20,
    marginTop: 10,
  },
  lblSign: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginVertical: 17,
    textAlign: 'center',
  },
  linearGradients: {
    borderRadius: 15,
    height: 56,
    marginTop: 22,
    marginHorizontal:20
  },
});
export default ChooseGender;
