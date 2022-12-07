import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Age : {this.props.age}</p>
        <p>Haircolor: {this.props.haircolor}</p>
      </div>
    )
  }
}
