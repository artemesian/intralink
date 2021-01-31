import loadMessageActionTypes from './chat-type.js';

const INITIAL_STATE = {
		Messages:[]
}

export const sendMessageReducer = (currentState = INITIAL_STATE, action = {}) => {

	switch (action.type) {
		case loadMessageActionTypes.LOAD_MESSAGE:
			return ({
				...action.payload 
			})
		default:
			return currentState;
	}
}