import React,{Component} from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {View} from 'react-native'
import Display from './Display'
import NumberPad from './NumberPad'
class Calculator extends Component{
    render(){
        return <View style={{flex:1,backgroundColor:'white'}}>
                <Display/>
                <NumberPad/>
            </View>
    }
}

function mapStateToProps(state) {
    //whatever is returned wil show up as props
}
function mapDispatchToProps(dispatch) {
    console.log("mapDispatchToProps" + dispatch);
    return {}
}
export default connect(null, mapDispatchToProps)(Calculator);