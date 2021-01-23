import loadArticlesActionTypes from './article-types.js';

export const loadArticles = (change) => ({
	type: loadArticlesActionTypes.LOAD_ARTICLES,
	payload: change
})
