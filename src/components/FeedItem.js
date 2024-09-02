import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
const FeedItem = ({nav, Data}) => {
  const renderItem = ({item}) => (
    <View style={styles.subContainer}>
      <Card style={styles.cardContainer}>
        <Card.Content style={{marginBottom: 15}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={item.avatar} />
              <View style={{flexDirection: 'column', marginLeft: 10}}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.loc}>{item.location}</Text>
              </View>
            </View>
            <Icon name="more-horizontal" size={24} color="#E1E4E8" />
          </View>
        </Card.Content>
        <TouchableWithoutFeedback
          onPress={() => nav.navigate('FullWidthScreen')}>
          <Card.Cover resizeMode="contain" source={item.cover} />
        </TouchableWithoutFeedback>
      </Card>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    marginVertical: 10,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: '#0A1F44',
  },
  loc: {
    fontSize: 13,
    color: '#8A94A6',
  },
});
export default FeedItem;
