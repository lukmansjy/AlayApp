import React, {Component } from 'react'
import { View, Text } from 'react-native'

class SplashScreen extends Component {
    state = {
        titik: '.'
    }

    componentDidMount = ()=>{
        this.run = setInterval(()=>{
            this.setState({
                titik :  this.state.titik + '.'
            })
        }, 300)
    }

    componentWillUnmount = ()=>{
        clearInterval(this.run)
    }

    render(){
        return(
            <View style={{backgroundColor: '#28a745', width: '100%', height: '100%', alignItems: 'center'}}>
                <Text style={{fontSize: 50, color: '#fff', marginTop: '50%'}}>Aplikasi Alay</Text>
                <Text style={{fontSize: 20, color: '#fff'}}>Loading{this.state.titik}</Text>
            </View>
        )
    }
}

export default SplashScreen