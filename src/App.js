import React, { Component } from 'react';
import './App.css';

import Game from './Game';
import Setup from './Setup';

const STATE_SETUP = 'setup';
const STATE_PLAYING = 'playing';

class App extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    state: STATE_SETUP,
	    player1: '',
	    player2: ''
	};
    }

    setGame(player1, player2) {
	this.setState({
	    player1: player1,
	    player2: player2,
	    state: STATE_PLAYING
	});
    }

    getMain() {
	if (this.state.state === STATE_SETUP) {
	    return <Setup play={ (p1, p2) => this.setGame(p1, p2) } />;
	} else {
	    return <Game restart={ () => this.setState({player1: '', player2: '', state: STATE_SETUP}) }/>;
	}
    }
    
    render() {
	return (
	    <div className="App">
              <header className="App-header">
		{
		    this.getMain()
		}
	      </header>
	    </div>
	);
    }
}

export default App;
