import React, { Component } from 'react';

class FooterFilter extends Component {
    render() {
        return (
            <footer class="todo-filter">
                <div class="total-item">3 items left</div>
                <ul>
                    <li><a href="#all">All</a></li>
                    <li><a href="#active">Active</a></li>
                    <li><a href="#completed">Completed</a></li>
                </ul>
            </footer>
        )
    }
}

export { FooterFilter }