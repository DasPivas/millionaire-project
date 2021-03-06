import React from 'react';
import { IVariants, QuestionDifficult, TAnswerNumbers } from '../data/questions';

enum WindowState {
	start = '/',
	game = '/game',
	end = '/end',
}

enum ResultGame {
	default = 'default',
	win = 'win',
	lose = 'lose',
	expired = 'expired',
}

enum HintsType {
	fiftyAvailable = 'fiftyAvailable',
	callAvailable = 'callAvailable',
	viewersAvailable = 'viewersAvailable',
}

type THintsType = {
	[key in HintsType]: boolean;
};

type TViewerHint = {
	[key in TAnswerNumbers]: number;
};

const defaultAvailableHint: THintsType = Object.freeze({
	[HintsType.fiftyAvailable]: false,
	[HintsType.callAvailable]: false,
	[HintsType.viewersAvailable]: false,
});

const defaultViewerHint: TViewerHint = Object.freeze({
	1: 0,
	2: 0,
	3: 0,
	4: 0,
});

interface IGameContext {
	windowState: WindowState;
	resultGame: string;
	difficult: QuestionDifficult;
	switchWindow: (state: WindowState) => void;
	setResultGame: (resultGame: ResultGame) => void;
	questionNumber: number;
	questionText: string;
	questionVariants: IVariants[];
	questionId: number;
	gameMove: (index: number, secondsLeft: number) => void;
	clearStates: () => void;
	availableHints: THintsType;
	changeAvailableHints: (name: HintsType) => void;
	fiftyHint: boolean;
	switchFiftyHint: (status: boolean) => void;
	callHint: string | undefined;
	switchCallHint: (status: string | undefined) => void;
	viewerHint: TViewerHint | undefined;
	switchViewerHint: (status: TViewerHint | undefined) => void;
	score: number;
	rightAnswer: number | undefined;
}

const value: IGameContext = {
	windowState: WindowState.start,
	resultGame: ResultGame.default,
	difficult: QuestionDifficult.easy,
	switchWindow: () => {},
	setResultGame: () => {},
	questionNumber: 0,
	questionText: '',
	questionVariants: [],
	questionId: 0,
	gameMove: () => {},
	clearStates: () => {},
	availableHints: defaultAvailableHint,
	changeAvailableHints: () => {},
	fiftyHint: false,
	switchFiftyHint: () => {},
	callHint: '',
	switchCallHint: () => {},
	viewerHint: defaultViewerHint,
	switchViewerHint: () => {},
	score: 0,
	rightAnswer: undefined,
};

const GameContext: React.Context<IGameContext> = React.createContext(value);
GameContext.displayName = 'GameContext';

export { WindowState, ResultGame, GameContext, HintsType, defaultAvailableHint, defaultViewerHint };
export type { IGameContext, THintsType, TViewerHint };
