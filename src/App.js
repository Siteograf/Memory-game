import React, { Component } from 'react';
import Game from './components/game'
import './css/bootstrap.min.css';
import './css/Game.css';

class App extends Component {
    render() {
        return (
            <div>
                <Game/>
            </div>
        );
    }
}

export default App;
