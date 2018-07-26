import React, { Component } from 'react';

class FormInput extends Component {
    render() {
        return (
            <header>
                <h1>todos</h1>
                <div class="add-todo-input">
                    <input type="checkbox" name="" id="" />
                    <input type="text" placeholder="What needs to be done?" />
                </div>
            </header>
        )
    }
}

export { FormInput }