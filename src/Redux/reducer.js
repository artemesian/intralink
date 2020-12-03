import {INIT_CONSTANT} from './constants';

const initialState={
	init:''
};

export const initReducer=(state=initialState,action={})=>{
	switch(action.type){
		case INIT_CONSTANT:
		   return Object.assign({},state,{init:action.payload})
		   break;
		default:
		return state;
	}
}
