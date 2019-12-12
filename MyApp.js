import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchPage from './app/SearchPage';
import SearchResults from './app/SearchResults';

const StackNavigator = createStackNavigator(
  {
    Search: {screen: SearchPage},
    Results: {screen: SearchResults},
  },
  {
    initialRouteName: 'Search',
  },
);

const AppContainer = createAppContainer(StackNavigator);

export default class MyApp extends React.Component {
  render() {
    return <AppContainer />;
  }
}
