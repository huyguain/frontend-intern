import React, { Component } from 'react';
import { TodoList } from './TodoList';
import { FooterFilter } from './FooterFilter';

class MainSection extends Component {
    render() {
        return (
            <section>
                <TodoList/>
                <FooterFilter/>
            </section>
        )
    }
}

export { MainSection }