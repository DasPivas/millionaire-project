import React from 'react';
import { IVariants } from '../data/questions';

enum WindowState {
	start = '/',
	game = '/game',
	end = '/end',
}

enum ResultGame {
	default = 'default',
	win = 'win',
	lose = 'lose',
}

interface IGameContext {
	windowState: WindowState;
	resultGame: string;
	switchWindow: (state: WindowState) => void;
	questionNumber: number;
	questionText: string;
	questionVariants: IVariants[];
	questionId: number;
	gameMove: (index: number, secondsLeft: number) => void;
	clearStates: () => void;
	score: number;
}

const value: IGameContext = {
	windowState: WindowState.start,
	resultGame: ResultGame.default,
	switchWindow: () => {},
	questionNumber: 0,
	questionText: '',
	questionVariants: [],
	questionId: 0,
	gameMove: () => {},
	clearStates: () => {},
	score: 0,
};

const GameContext: React.Context<IGameContext> = React.createContext(value);
GameContext.displayName = 'GameContext';

export { WindowState, ResultGame, GameContext };
export type { IGameContext };
