import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import images from '../api/images';
import {FlatGrid} from 'react-native-super-grid';
const GridImg = () => {
  const [items, setItems] = useState([
    {img: images.cover1},
    {img: images.cover2},
    {img: images.cover3},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
  ]);
  return (
    <View style={styles.container}>
      <FlatGrid
        itemDimension={100}
        data={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({item}) => (
          <View style={[styles.itemContainer]}>
            <Image style={{width: 120, height: 120}} source={item.img} />
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
  },
});
export default GridImg;
