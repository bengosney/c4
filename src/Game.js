import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Game.scss';

//import { HUMAN } from './Setup';

const emptyBoard = (x, y) => {
    let b = new Array(x);
    for (let i = 0; i < b.length; i++) {
	b[i] = new Array(y);
	for (let j = 0; j < b[i].length; j++) {
	    b[i][j] = 0;
	}
    }

    return b;
};

const httpMatch = new RegExp("^https?://");

class Game extends Component {

    constructor(props) {
	super(props);

	this.state = {
	    board: emptyBoard(7,6),
	    turn: 1,
	    winner: 0,
	    winningPositions: []
	};

	this.computerTurn();
    }

    humanTurn() {
	return !httpMatch.test(this.props[`player${this.state.turn}`]);
    }

    getCurrentName() {
	return this.props[`player${this.state.turn}`];
    }

    computerTurn() {
	if (!this.humanTurn()) {
	    const board = JSON.stringify(this.state.board);
	    const url = this.props[`player${this.state.turn}`];
	    const fullURL = `${url}?gamestate=${board}`;

	    const req = new Request(fullURL);
	    fetch(req)
		.then(response => response.text())
		.then(response => parseInt(response))
		.then(col => setTimeout(() => this.doTurn(col), 250));
	}
    }

    col_click(e, col) {
	if (!this.humanTurn()) {
	    return;
	}

	this.doTurn(col);
    }

    doTurn(col) {
	const {board, turn} = this.state;
	const row = board[col];
	let winner = 0;
	let pos = -1;
	
	for (let i = 0 ; i < row.length ; i++) {
	    if (row[i] === 0) {
		pos = i;
	    }
	}

	if (pos < 0) {
	    this.computerTurn();
	    return false;
	}
	
	if (this.state.winner > 0) {
	    return false;
	}

	row[pos] = turn;
	board[col] = row;

	if (this.check_win(1, board)) {
	    winner = 1;
	}
	if (this.check_win(2, board)) {
	    winner = 2;
	}
	
	this.setState({board: board, turn: turn === 1 ? 2 : 1, winner: winner}, () => this.computerTurn());
	return true;
    }

    check_win(player, board) {
	const winCount = 4;
	const getHeight = () => board.length + 1;
	const getWidth = () => board[0].length + 1;
	
	// horizontalCheck 
	for (let j = 0; j < getHeight() - (winCount - 1) ; j++ ) {
	    for (let i = 0; i < getWidth(); i++) {
		let count = 0;
		let winningPositions = [];
		for (let w = 0 ; w < winCount ; w++) {
		    if (board[i][j+w] === player) {
			count += 1;
			winningPositions.push(`${i}:${j+w}`);
		    }
		}
		if (count === winCount) {
		    this.setState({winningPositions: winningPositions});
		    return true;
		}           
	    }
	}
	// verticalCheck
	for (let i = 0; i < getWidth()-3 ; i++ ){
	    for (let j = 0; j < getHeight(); j++){
		var count = 0;
		let winningPositions = [];
		for (let w = 0 ; w < winCount ; w++) {
		    if (board[i+w][j] === player) {
			count++;
			winningPositions.push(`${i+w}:${j}`);
		    }
		}
		if (count === winCount) {
		    this.setState({winningPositions: winningPositions});
		    return true;
		}           
	    }
	}
	// ascendingDiagonalCheck 
	for (let i=3; i < getWidth(); i++){
	    for (let j=0; j < getHeight()-3; j++){
		let count = 0;
		let winningPositions = [];
		for (let w = 0 ; w < winCount ; w++) {
		    if (board[i-w][j+w] === player) {
			count++;
			winningPositions.push(`${i-w}:${j+w}`);
		    }
		}
		if (count === winCount) {
		    this.setState({winningPositions: winningPositions});
		    return true;
		}
	    }
	}
	// descendingDiagonalCheck
	for (let i=3; i < getWidth(); i++){
	    for (let j=3; j < getHeight(); j++){
		let count = 0;
		let winningPositions = [];
		for (let w = 0 ; w < winCount ; w++) {
		    if (board[i-w][j-w] === player) {
			count++;
			winningPositions.push(`${i-w}:${j-w}`);
		    }
		}
		if (count === winCount) {
		    this.setState({winningPositions: winningPositions});
		    return true;
		}
	    }
	}
	
	return false;
    }

    
    render() {
	const title = this.state.winner === 0 ? `Player ${this.state.turn}` : `Winner ${this.state.winner}`;
	const waiting = this.humanTurn() || this.state.winner > 0 ? '' : ' - waiting on AI';
	const getClass = (val, row, col) => {
	    let className = (val === 1) ? 'red' : (val === 2) ? 'yellow' : '';

	    if (this.state.winningPositions.indexOf(`${col}:${row}`) > -1) {
		className = `${className} winner`;
	    }

	    return className;
	};
	const getElement = (e, index, col) => <div key={index} className={ getClass(e, index, col) + " item"}>{ e }</div>;
	const getCol = (col, col_index) => <div key={col_index} className="col" onClick={ (e, i) => this.col_click(e, col_index) }>{ col.map((e, row_index) => getElement(e, row_index, col_index)) }</div>;
	
	return (
	    <div>
	      <div>Game - { title }{ waiting }</div>
	      <div>
		<button onClick={ () => this.props.restart() }>Reset</button>
	      </div>
	      <div className={ "game" }>
		{ this.state.board.map((col, col_index) => getCol(col, col_index)) }
	      </div>
            </div>
	);
    }
}

Game.propTypes = {
    restart: PropTypes.func.isRequired,
    player1: PropTypes.string.isRequired,
    player2: PropTypes.string.isRequired
};

Game.defaultProps = {
    restart: () => console.log('Reset')
};


export default Game;
