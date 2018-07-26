import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <section class="todo-list">
                <ul>
                    <li class="todo-item">
                        <input type="checkbox" name="" id="" />
                        <label>Huy</label>
                        <button>X</button>
                    </li>
                    <li class="todo-item">
                        <input type="checkbox" name="" id="" />
                        <label>Hoa</label>
                        <button>X</button>
                    </li>
                    <li class="todo-item">
                        <input type="checkbox" name="" id="" />
                        <label>Thom</label>
                        <button>X</button>
                    </li>
                </ul>
            </section>
        )
    }
}

export { TodoList }