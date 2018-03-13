import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, Header } from 'react-native-elements'

export default class TimerView extends React.Component {
  render() {
    return(
      <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'Alerm APP', style: { color: '#fff' } }}
      />
    )
  }
}

