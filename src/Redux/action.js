import {INIT_CONSTANT} from './constants.js'

export const  init=(value)=>({
	type:INIT_CONSTANT,
	payload:value
})