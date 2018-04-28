import React,{Component} from 'react'
import {TouchableHighlight,Text,StyleSheet} from 'react-native'

class Button extends Component{
    render(){
        return <TouchableHighlight style={style.button} underlayColor="#FFD700" onPress={()=>this.props.onPress()}>
                    <Text style={style.buttonText}>{this.props.item.text}</Text>
                </TouchableHighlight>
    }
}
const style=StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    }
})

export {Button}