import loadArticlesActionTypes from './article-types'
const INITIAL_STATE={
	ARTICLE:[]
}
export const loadArticles= (currentState = INITIAL_STATE, action = {}) => {

	switch (action.type) {
		case loadArticlesActionTypes.LOAD_ARTICLES:
			return (
				
				{...action.payload }
			)
		default:
			return currentState;
	}
}