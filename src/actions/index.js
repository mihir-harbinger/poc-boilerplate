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

const _unsafeChangeLimit = limit => {
	return {
		type: types.CHANGE_LIMIT,
		limit
	}
}

export const changeLimit = limit => {
	return dispatch => {
		dispatch(changePage(0))
		dispatch(_unsafeChangeLimit(limit))
	}
}

export const deleteCompany = id => {
	return {
		type: types.DELETE_COMPANY,
		id
	}
}

export const setFilterText = text => {
	return {
		type: types.SET_FILTER_TEXT,
		text
	}
}
