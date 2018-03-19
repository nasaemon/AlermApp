import React from 'react'
import { Text, Header } from 'react-native-elements'
import TimerSound from './sound'
import {
  Button,
  StyleSheet,
  View,
  Picker,
  Timers,
} from 'react-native'

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

    this.state.timer = setInterval( () => {
      this.setState({remainingTime: this.state.remainingTime - 1 })
      if(this.state.remainingTime <= 0){ this.clearTimer() }
    },1000)
  }

  stopTimer(){
    this.clearTimer()
  }

  clearTimer(){
    clearInterval(this.state.timer)
    this.setState({timer: null})
  }

  render() {
    var list = []
    for( const i=1; i<=10; i++ ){
      list.push( <Picker.Item label= {i+'時間'} value={i*60*60*1000} key={i}/> )
    }

    return(
      <View>
        <Picker
          selectedValue={this.state.selectTime}
          onValueChange={(itemValue, itemIndex) => this.setState({selectTime: itemValue})}>
          <Picker.Item label='OFF' value={0} />
          { list }
        </Picker>

        { !this.state.timer ?
          <Button title={'Start Timer!!'} onPress={ () => this.startTimer() } /> :
          <Button title={'Stop Timer!!'} onPress={ () => this.stopTimer() } />
        }

        <Text h1 style={ {alignItems: 'center'} }>残り秒数: {this.state.remainingTime}</Text>

        <TimerSound />
      </View>
    )
  }
}
