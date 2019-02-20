import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { db, localDB } from './Store';

import './Setup.css';

export const HUMAN = 'Human';

class Setup extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    player1: props.player1,
	    player2: props.player2,
	    playerList: []
	};

	this.getPlayers();
    }

    getPlayers() {
	db.query({
	    map: function(doc, emit) {
		if (doc.type == 'player') {
		    emit(doc.name);
		}
	    },
	    reduce: function(keys, values, rereduce) {
		console.log(keys, values, rereduce);
		const unique_labels = {};
		values.forEach((label) => {
		    if(!unique_labels[label]) {
			unique_labels[label] = true;
		    }
		});
		
		return unique_labels;
	    }
	}).then(results => {
	    console.log(results);
	    this.setState({playerList: results.rows});
	});
    }


    handleChange(key, event) {
	const state = [];

	state[key] = event.target.value;
	
	this.setState(state);
    }
    
    render() {
	const { player1, player2 } = this.state;

	const playerList = this.state.playerList.map(e => {
	    return (<div key={ e.id }>{ e.key }</div>);
	});

	
	return (
	    <div className="Setup">
	      <div>Setup</div>
	      <div>
		<p>
		  <label htmlFor="player_1">Player 1</label>
		  <input id="player_1" type="text" value={ this.state.player1 } onChange={ e => this.handleChange('player1', e) } />
		</p>
		<p>
		  <label htmlFor="player_2">Player 2</label>
		  <input id="player_2" type="text" value={ this.state.player2 } onChange={ e => this.handleChange('player2', e) } />
		</p>
		<p>
		  <button onClick={ () => this.props.play(player1, player2) } disabled={ player1 === '' || player2 === '' }>Play</button>
		</p>
	      </div>
	    </div>
	);
    }
}

Setup.propTypes = {
    play: PropTypes.func.isRequired,
    player1: PropTypes.string,
    player2: PropTypes.string
};

Setup.defaultProps = {
    play: (player1, player2) => console.log(player1, 'vs', player2),
    player1: '',
    player2: ''
};

export default Setup;
