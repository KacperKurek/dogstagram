import React from 'react';
import { StyleSheet, SafeAreaView, Text, FlatList, View, Dimensions, ActivityIndicator, Platform } from 'react-native';
import { YellowBox } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen'

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);
const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Callstagram'
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      title: 'Detail'
    }
  },
},
  {
    initialRouteName: 'Home',
  }
);
export default class App extends React.Component {
  render() {
    return (
        <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: Platform.OS === 'ios' ? "center" : "left",
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
