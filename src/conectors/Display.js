import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View,Text,StyleSheet } from 'react-native'

class Display extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (<View style={{ flex: 2, backgroundColor: 'black' }}>
                    <Text style={style.textInput} >{this.props.expression}</Text>
                    <Text style={style.textInput} >{this.props.output}</Text>
                </View>
        )
    }
}
const style=StyleSheet.create({
    textInput:{
        flex:1,
        color:'white',
        fontSize:30
    }
})

function mapStateToProps(state) {
    return{
        expression:state.calculator.expression,
        output:state.calculator.output
    }
}
function mapDispatchToProps(dispatch) {
    console.log("mapDispatchToProps" + dispatch);
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Display);