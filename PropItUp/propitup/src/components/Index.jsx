import React, { Component } from 'react'

export default class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
        counter :this.props.age};
    };

    increase=()=>{
      this.setState({counter:this.state.counter+1})
    }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Age : {this.state.counter}</p>
        <p>Haircolor: {this.props.haircolor}</p>

        <button onClick={this.increase}>Birthday</button>
        {this.props.children}

      </div>
    )
  }
}

