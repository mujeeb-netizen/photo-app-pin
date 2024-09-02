import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
const CommentItem = ({nav, Data}) => {
  const renderItem = ({item}) => (
    <View style={styles.subContainer}>
      <Card style={styles.cardContainer}>
        <Card.Content>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 15,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={item.avatar} />
              <View style={{flexDirection: 'column', marginLeft: 10}}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.loc}>{item.location}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.commentTxt}>{item.comment}</Text>
        </Card.Content>
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
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
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
  commentTxt: {
    color: '#4C5980',
    fontSize: 14,
  },
});
export default CommentItem;
