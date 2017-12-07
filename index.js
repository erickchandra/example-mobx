import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from './app/App';
import ListStore from './app/mobx/listStore';

const AppStack = StackNavigator({
  FirstScreen: {
    screen: App,
    navigationOptions: {
      title: 'Screen 1'
    }
  }
});

class ExampleMobx extends Component {
  renderScene (route, navigator) {
    return (<AppStack screenProps={{ store: {ListStore} }} />);
  }
  render () {
    return (
      <AppStack />
    )
  }
};

AppRegistry.registerComponent('ExampleMobx', () => ExampleMobx);
