import React from 'react';
import './App.css';

import GetStarted from './components/getStarted'

class QuoteBox extends React.Component {
  render() {
    return (
      <div id="quoteBox" className={this.props.name}>
        <p id="quote">{this.props.name}</p>
      </div>
    )
  }}


class QuoteBoxContainer extends React.Component {
  render() {
    return (
      <div id="quoteBoxContainer">
        <QuoteBox name={"amarah"}/>
        <QuoteBox name={"stres"}/>
        <QuoteBox name={"kegelisahan"}/>
        <QuoteBox name={"depresi"}/>
        <QuoteBox name={"hubungan"}/>
        <QuoteBox name={"duka"}/>
        <QuoteBox name={"rasa-takut"}/>
        <QuoteBox name={"percaya-diri"}/>

        <GetStarted />
      </div>
    )
  }
}

export default QuoteBoxContainer
