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
    this.state = {
      selectTime: 0,
      remainingTime: 0,
      timer: null,
    }
  }

  startTimer(){
    this.setState({remainingTime: this.state.selectTime })
    setInterval( () => {
    this.setState({remainingTime: this.state.remainingTime - 1 })
    },1000)
  }
  stopTimer(){}


  render() {
    var list = []
    for( const i=1; i<=10; i++ ){
      list.push( <Picker.Item label= {i+'時間'} value={i*60*60} key={i}/> )
    }

    return(
      <View>
        <Header
        centerComponent={{ text: 'Alerm APP', style: { color: '#fff' } } }
        />
        <Picker
          selectedValue={this.state.selectTime}
          onValueChange={(itemValue, itemIndex) => this.setState({selectTime: itemValue})}>
          <Picker.Item label='OFF' value={0} />
          { list }
        </Picker>

        <Button title={'Start Timer!!'} onPress={ () => this.startTimer() } />
        <Button title={'Stop Timer!!'} onPress={ () => this.stopTimer() } />

        <Text h1 style={ {alignItems: 'center'} }>{this.state.selectTime}</Text>
        <Text h1 style={ {alignItems: 'center'} }>{this.state.remainingTime}</Text>
        <Text h1 style={ {alignItems: 'center'} }>{typeof(this.state.remainingTime)}</Text>
      </View>
    )
  }
}

