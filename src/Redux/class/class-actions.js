import joinClassActionTypes from './class-types.js';

export const loadClass = (change) => ({
	type: joinClassActionTypes.LOAD_CLASS,
	payload: change
})
export const listClass = (change) => ({
	type: joinClassActionTypes.LIST_CLASS,
	payload: change
})
export const lastMessage = (change) => ({
	type: joinClassActionTypes.LIST_CLASS,
	payload: change
})
