import React, { Component } from 'react'
import { View } from 'react-native'
import { TextConvert, SplashScreen } from './page'

class App extends Component {
  state = {
    splash: true
  }
  componentDidMount = ()=>{
    setTimeout(()=>{
      this.setState({
        splash: false
      })
    }, 1500)
  }
  render(){
    return(
      <View>
        {this.state.splash? <SplashScreen/> : <TextConvert/>}
      </View>
    )
  }
}

export default App