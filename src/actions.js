import axios from 'axios'

export const actionUserFetchRequested = () => {
	return {
		type: 'USER_FETCH_REQUESTED'
	}
}

export const actionUserFetchSuccess = (data) => {
	//console.log('actionUserFetchSuccess ',data.data.results[0])
	return {
		type: "USER_FETCH_SUCCEEDED", 
		payload: {
			id: data.id.value, 
			name: data.name.last,
			icon: data.picture.large,
		}
	}
}

export const actionUserFetchError = (data) => {
	return {type: "USER_FETCH_FAILED", payload: data}
}




const ADI_DOG = 'https://dog.ceo/api/breeds/image/random'





export const actionFetchDogsRequested = () => {
	console.log('actionFetchDogsRequested')
	return {
		type: 'FETCH_DOG_REQUESTED'
	}
}

export const actionFetchDogsSuccess = (data) => {
	console.log('actionFetchDogsSuccess.data ',data.data.message)
	return {
		type: 'FETCH_DOG_SUCCESSED',
		payload: data.data.message
	}
}

export const actionDogFetchError = (data) => {
	return {type: "FETCH_DOG_FAILED", payload: data}
}


export const GetDogData = () => {
	console.log('GetDogData')
	return dispatch => {
		dispatch(actionFetchDogsRequested())
		axios(ADI_DOG)
			.then(response => dispatch(actionFetchDogsSuccess(response)))
			.catch(error => dispatch(actionDogFetchError(error.message)))
	}
}