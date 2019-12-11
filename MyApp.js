import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchPage from './app/SearchPage';

const StackNavigator = createStackNavigator({
  Search: {screen: SearchPage},
});

const AppContainer = createAppContainer(StackNavigator);

export default class MyApp extends React.Component {
  render() {
    return <AppContainer />;
  }
}
