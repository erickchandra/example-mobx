import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from './app/App';
import ListStore from './app/mobx/listStore';
import { Provider } from 'mobx-react/native';

const AppStack = StackNavigator({
  HomeScreen: {
    screen: App,
    navigationOptions: {
      title: 'Home Screen'
    }
  }
});

class ExampleMobx extends Component {
  render () {
    return (
      <Provider ListStore={ListStore}>
        <AppStack />
      </Provider>
    )
  }
};

AppRegistry.registerComponent('ExampleMobx', () => ExampleMobx);
