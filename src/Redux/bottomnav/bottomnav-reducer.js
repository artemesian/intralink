import bottomnavActionTypes from './bottomnav-types.js';

const INITIAL_STATE = {
	bottomnav: {
		show: true
	}
}

export const bottomnavReducer = (currentState = INITIAL_STATE, action = {}) => {

	switch (action.type) {
		case bottomnavActionTypes.CHANGE_BOTTOMNAV:
			return ({
				...currentState,
				bottomnav: { ...currentState.bottomnav, ...action.payload }
			})
		default:
			return currentState;
	}
}
