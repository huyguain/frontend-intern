import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LogoReact } from './components/LogoReact';
import { Infor } from './components/Infor'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<LogoReact/>
        <Infor/>*/}
        <header>
          <h1>todos</h1>
          <div class="add-todo-input">
            <input type="checkbox" name="" id=""/>
            <input type="text" placeholder="What needs to be done?"/>
          </div>
        </header>
        <section>
          <section class="todo-list">
                <ul>
                  <li class="todo-item">
                    <input type="checkbox" name="" id=""/>
                    <label>Huy</label>
                    <button>X</button>
                </li>
                    <li class="todo-item">
                      <input type="checkbox" name="" id=""/>
                      <label>Hoa</label>
                      <button>X</button>
                </li>
                <li class="todo-item">
                    <input type="checkbox" name="" id=""/>
                    <label>Thom</label>
                    <button>X</button>
                </li>
            </ul>
          </section>
          <footer class="todo-filter">
            <div class="total-item">3 items left</div>
            <ul>
              <li><a href="#all">All</a></li>
              <li><a href="#active">Active</a></li>
              <li><a href="#completed">Completed</a></li>
            </ul>
          </footer>
      </section>
      <footer class="footer-info">
        <p>Double-click to edit a todo</p>
        <p>Created by petehunt</p>
        <p>Part of TodoMVC</p>
      </footer>
    </div>
    );
  }
}
            
export default App;
  