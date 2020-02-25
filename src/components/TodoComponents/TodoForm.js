import React, { Component } from 'react'

export default class TodoForm extends Component {
    
    constructor() {
        super();
        this.state = {
          value: ""
        };
      }
    
      handleChanges = e => {
        // update state with each keystroke
        // console.log(e);
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.value);
        // console.log(this.props)
      };

      handleSubmit = e => {
        e.preventDefault()
        this.props.addItem(e, this.state.value)
        this.setState({value: ''})
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                value={this.state.value}
                name="value"
                onChange={this.handleChanges}
                ></input>
                <button>add</button>
            </form>
        )
    }
}

