import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View,Text,StyleSheet } from 'react-native'
import {buttons} from '../util/data'
import {Button} from '../components/Button'
import { numberPressed, operationPressed,decimalPressed,equalsPressed,clearPressed,clearOnePressed } from '../actions/index'

class NumberPad extends Component {
    onButtonPress(item){
        if(item.type==='number')
            this.props.numberPressed(item)
        else if(item.type==='decimal')
            this.props.decimalPressed(item)
        else if(item.type==='equals')
            this.props.equalsPressed(item)
        else if(item.type==='clear')
            this.props.clearPressed()
        else if(item.type==='clearOne')
            this.props.clearOnePressed()
        else
            this.props.operationPressed(item)
    }
    renderButtons(){
        let views = [];

        for (var r = 0; r < buttons.length; r++) {
            let row = buttons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i++) {
                let input = row[i];

                inputRow.push(
                    <Button item={input} onPress={()=>this.onButtonPress(input)} key={i+" "}/>
                );
            }

            views.push(<View style={style.inputRow} key={r+" "}>{inputRow}</View>)
        }

        return views;
    }

    render() {
        return <View style={{ flex: 6, backgroundColor: '#555' }} >
            {this.renderButtons()}
            </View>
    }
}

const style=StyleSheet.create({
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
})

function mapStateToProps(state) {
    //whatever is returned wil show up as props
    return {}
}
function mapDispatchToProps(dispatch) {
    console.log("mapDispatchToProps" + dispatch);
    return {
        numberPressed: function (params) {
            dispatch(numberPressed(params));
        },
        operationPressed: function (params) {
            dispatch(operationPressed(params));
        },
        equalsPressed: function (params) {
            dispatch(equalsPressed(params));
        },
        decimalPressed: function (params) {
            dispatch(decimalPressed(params));
        },
        clearPressed: function () {
            dispatch(clearPressed());
        },
        clearOnePressed: function () {
            dispatch(clearOnePressed());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NumberPad);