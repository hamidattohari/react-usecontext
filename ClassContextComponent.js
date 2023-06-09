import React, { Component } from 'react';
import { ThemeContext } from './App';

export default class ClassContextComponent extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? '#333' : '#CCC',
      color: dark ? '#333' : '#CCC',
      padding: '2rem',
      margin: '2rem',
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>ClassTheme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
