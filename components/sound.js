import React from 'react'
import { Button } from 'react-native'
export default class TimerSound extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nowPlaying: false
    }
  }

  startSound(){
    try {
      const { soundObject, status } =  Expo.Audio.Sound.create(
        require('../assets/sounds/hello.mp3'),
        { shouldPlay: true }
      )
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }

  render() {
    return(
      <Button title='Run Sound!!' onPress={ () => this.startSound() } />
    )
  }
}
