import loadUserActionTypes from './auth-types.js';

export const loadUser = (change) => ({
	type: loadUserActionTypes.LOAD_USER,
	payload: change
})
