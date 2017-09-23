import { Action } from '@ngrx/store';

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const UPDATE = 'UPDATE';
export const LOAD = 'LOAD';

export function plantsReducer(state: Array<any> = [], action: Action) {
	switch (action.type) {
		case ADD:
			return [...state, action.payload];

		case REMOVE:
			return state;

		case UPDATE:
			return state;

    case LOAD:
			return [...action.payload];

		default:
			return state;
	}
}
