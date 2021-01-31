import loadUserActionTypes from './auth-types'
const INITIAL_STATE={

}
export const loadUser = (currentState = INITIAL_STATE, action = {}) => {

	switch (action.type) {
		case loadUserActionTypes.LOAD_USER:
			return ({
				...currentState,
				User: { ...currentState, ...action.payload }
			})
		default:
			return currentState;
	}
}