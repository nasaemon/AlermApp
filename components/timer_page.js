import React from 'react'
import { StyleSheet, View, Picker } from 'react-native'
import { Button, Text, Header } from 'react-native-elements'

export default class TimerView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: null }
  }
  render() {
    var list = []
    for( const i=1; i<=10; i++ ){
      list.push( <Picker.Item label= {i+'時間'} value={i}/> )
    }

    return(
      <View>
        <Header
        centerComponent={{ text: 'Alerm APP', style: { color: '#fff' } } }
        />
        <Picker
          selectedValue={this.state.time}
          onValueChange={(itemValue, itemIndex) => this.setState({time: itemValue})}>
          { list }
        </Picker>
        <Text> {this.state.time} </Text>
      </View>
    )
  }
}

