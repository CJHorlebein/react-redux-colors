import React, { Component } from 'react';

let block = {
    width: '5em',
    height: '5em',
    margin: '2em auto 0'
}
let text = {
    textAlign: 'center'
}

class ColorBlock extends Component {
    render() {
        return (
            <div>
                <div style={{...block, backgroundColor: this.props.color}}>
                </div>
                <div style={text}>
                    {this.props.color}
                </div>
            </div>
        )
    }
}


export default ColorBlock;