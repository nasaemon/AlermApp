import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TimerView from './components/timer_page'

export default class App extends React.Component {
  render() {
    return (
      <View style= { styles.container }>
        <TimerView />
      </View>
    )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
