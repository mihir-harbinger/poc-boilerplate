import * as types from '../constants'
import { loadData } from '../api'

export const dataLoadRequest = () => {
	return {
		type: types.DATA_LOAD_REQUEST
	}
}

export const dataLoadSuccess = (data) => {
	return {
		type: types.DATA_LOAD_SUCCESS,
		data
	}
}

export const dataLoadFailure = () => {
	return {
		type: types.DATA_LOAD_FAILURE
	}
}

export const fetchData = () => {
	return dispatch => {
		dispatch(dataLoadRequest())
		loadData((data) => {
			if(data){
					dispatch(dataLoadSuccess(data))
			}
			else{
					dispatch(dataLoadSuccess(data))
			}
		}, 1000)
	}
}

export const changePage = page => {
	return {
		type: types.CHANGE_PAGE,
		page
	}
}

export const changeLimit = limit => {
	return {
		type: types.CHANGE_LIMIT,
		limit
	}
}

export const deleteCompany = id => {
	return {
		type: types.DELETE_COMPANY,
		id
	}
}
