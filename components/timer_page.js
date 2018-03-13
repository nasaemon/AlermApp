import React from 'react'
import {
  Button,
  StyleSheet,
  View,
  Picker,
  Timers,
} from 'react-native'

import { Text, Header } from 'react-native-elements'

export default class TimerView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: 'off' }
  }

  startTimer(){}
  stopTimer(){}
  render() {
    var list = []
    for( const i=1; i<=10; i++ ){
      list.push( <Picker.Item label= {i+'時間'} value={i} key={i*i}/> )
    }

    return(
      <View>
        <Header
        centerComponent={{ text: 'Alerm APP', style: { color: '#fff' } } }
        />
        <Picker
          selectedValue={this.state.time}
          onValueChange={(itemValue, itemIndex) => this.setState({time: itemValue})}>
          <Picker.Item label='OFF' value='off' />
          { list }
        </Picker>

        <Button title={'Start Timer!!'} onPress={ () => this.startTimer() } />
        <Button title={'Stop Timer!!'} onPress={ () => this.stopTimer() } />
      </View>
    )
  }
}

