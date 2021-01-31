import loadMessageActionTypes from './chat-type.js';

export const loadMessages = (change) => ({
	type: loadMessageActionTypes.LOAD_MESSAGE,
	payload: change
})
