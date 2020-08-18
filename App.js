import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import ScoreScreen from './screens/ScoreScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  ScoreScreen:ScoreScreen,
})

const AppContainer = createAppContainer(AppNavigator)
