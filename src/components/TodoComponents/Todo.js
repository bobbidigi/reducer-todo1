import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
    render() {
        return (
            <div
            className={`item${this.props.todo.selected ? " selected" : ""}`}
             onClick={(e) => this.props.toggle(this.props.todo.id)}>
                {this.props.todo.name}
            </div>
        )
    }
}
