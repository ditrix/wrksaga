
import {combineReducers} from 'redux' 

const initialStateUser = {loadin: false, error: false, name: '', id: null}

function userReducer(state = initialStateUser, action){
	switch(action.type){
		case 'USER_FETCH_REQUESTED':
			return {
				loading: true, error: false
			}
		case 'USER_FETCH_SUCCEEDED':
			return {
				id: action.payload.id,
				name: action.payload.name,
				icon: action.payload.icon,
				loading: false,
				error: false,
			}
		case 'USER_FETCH_FAILED':
			return {
				name: '',
				id: null,
				loading: false,
				error: true,
			}
		default: 
			return state	
	}
}


const initialStateDog = {
	url: '', loading: false, error: false,
}

function dogReducer(state = initialStateDog, action){
	console.log('dogReducer.action.type', action)
	switch(action.type){
		case 'FETCH_DOG_REQUESTED':
			return {
				url: '', loading: true, error: false
			}

		case 'FETCH_DOG_SUCCESSED':		
			console.log('FETCH_DOG_SUCCESSED.action', action)	
			return {
				url: action.payload,
				loading: false,
				error: false,
			}

		case 'FETCH_DOG_FAILED':
			return {
				url: '',
				loading: false,
				error: true,
			}

		default: 
			return state	
	}

}



export const  rootReducer = combineReducers({user: userReducer, dog: dogReducer})