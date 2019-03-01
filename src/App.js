import React, { Component } from 'react';
import * as css from './AppCSS.js';
import { withRouter } from 'react-router-dom';
import ColorBlock from './ColorBlock';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <header style = {css.header}>
          <span style = {css.headerText}>Color Me This!</span>
        </header>
        <div style = {css.main}>
          <div style={css.colors}>
            {this.props.saveColors.map( (color, i) => {
              return < ColorBlock key={i} color={color} />
            })}
          </div>
          <hr />
          <div style={css.btns}>
            <button style={css.btn} onClick={this.props.saveColor}>Save</button>
            <button style={css.btn} onClick={this.props.nextColor}>Next</button>
          </div>
            {this.props.nextColors.map( (color, i) => {
              return < ColorBlock key={i} color={color} />
            })}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    saveColors: state.saveColors,
    nextColors: state.nextColors,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    saveColor: () => dispatch({ type: `SAVE_COLOR` }),
    nextColor: () => dispatch({ type: `NEXT_COLOR` })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
