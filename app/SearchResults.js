import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
  Alert,
} from 'react-native';

class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.item, this.props.index);
  };

  render() {
    console.log('ListItem .render');
    const item = this.props.item;
    const price = item.price_formatted.split(' ')[0];
    console.log(this.props.index);
    console.log(item);
    return (
      <TouchableHighlight onPress={this._onPress} underlayColor="#dddddd">
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{uri: item.img_url}} />
            <View style={styles.textContainer}>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.title} numberOfLines={1}>
                {item.title}
              </Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
}

export default class SearchResults extends React.Component {
  static navigationOptions = {
    title: 'Results',
  };

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({item, index}) => (
    <ListItem item={item} index={index} onPressItem={this._onPressItem} />
  );

  _onPressItem = (item, index) => {
    Alert.alert('Pressed Row: ' + index, 'Keyword: \n' + item.keywords, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };

  render() {
    console.log('Results.render');
    const params = this.props.navigation.state;
    console.log(params);
    const listings = params.params.listings;
    return (
      <FlatList
        data={listings} // = datas
        keyExtractor={this._keyExtractor} // = indetify string
        renderItem={this._renderItem} // = Cell
      />
    );
  }
}

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd',
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC',
  },
  title: {
    fontSize: 20,
    color: '#656565',
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
  },
});
