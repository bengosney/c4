import React, { Component } from 'react';
import './App.css';

import { db, localDB } from './Store';

import Game from './Game';
import Setup from './Setup';


const STATE_SETUP = 'setup';
const STATE_PLAYING = 'playing';

class App extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    state: STATE_SETUP,
	    player1: 'Human',
	    player2: 'Human',
	    players: []
	};
    }

    savePlayer(player) {
	const currentDate = new Date();
	const newPlayer = {
	    type: 'player',
	    name: player,
	    ts: currentDate.getTime()
	};

	newPlayer._id = `${newPlayer.name}:${newPlayer.ts}`;

	db.put(newPlayer);
    }
		
    startGame(player1, player2) {
	this.savePlayer(player1);
	this.savePlayer(player2);
	
	this.setState({
	    player1: player1,
	    player2: player2,
	    state: STATE_PLAYING
	});
    }

    getMain() {
	if (this.state.state === STATE_SETUP) {
	    return <Setup play={ (p1, p2) => this.startGame(p1, p2) } player1={ this.state.player1 } player2={ this.state.player2 } />;
	} else {
	    const { player1, player2 } = this.state;
	    const resetState = {
		state: STATE_SETUP
	    };
	    return <Game restart={ () => this.setState(resetState) } player1={ player1 } player2={ player2 } />;
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
