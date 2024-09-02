import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TextInput,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import images from '../api/images';
import CommentItem from '../components/CommentItem';
const Data = [
  {
    id: '1',
    avatar: images.avatar1,
    name: 'Mabelle Blake',
    location: 'United State',
    comment:
      'So amazing! The picture is so wonderful, I really love your work ❤️',
  },
  {
    id: '2',
    avatar: images.avatar2,
    name: 'Mabelle Blake',
    location: 'United State',
    comment:
      'So amazing! The picture is so wonderful, I really love your work ❤️',
  },
  {
    id: '3',
    avatar: images.avatar3,
    name: 'Mabelle Blake',
    location: 'United State',
    comment:
      'So amazing! The picture is so wonderful, I really love your work ❤️',
  },
];
const CommentScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={false}
      />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          style={{alignItems: 'center', marginRight: 40}}
          title="Comments"
        />
      </Appbar.Header>
      <View style={styles.subContainer}>
        <CommentItem nav={navigation} Data={Data} />
      </View>
      <View style={{marginHorizontal: 20}}>
        <View style={styles.inputContainer}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image source={images.emoj} />
            <TextInput
              placeholder="Write Comment..."
              placeholderTextColor="#949BB3"
              selectionColor="#4C5980"
              style={styles.inputTxt}
            />
          </View>
          <Image source={images.send} />
        </View>
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
    backgroundColor: '#fff',
    elevation: 0,
  },
  subContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: '#fff',
    height: 62,
    paddingHorizontal: 20,
    width: '100%',
    marginVertical: 15,
  },
  inputTxt: {
    fontSize: 16,
    fontWeight: '500',
    width: '85%',
    marginLeft: 10,
    color: '#4C5980',
  },
});
export default CommentScreen;
