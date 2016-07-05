import { combineReducers } from 'redux'
import * as types from '../constants'

const initialState = {
	companiesById: {},
	entities: [],
	currentPage: 0,
	limit: 5
}

const currentPage = (state=initialState.currentPage, action) => {
	switch(action.type){
		case types.CHANGE_PAGE:
			return action.page
		default:
			return state
	}
}

const limit = (state=initialState.limit, action) => {
	switch(action.type){
		case types.CHANGE_LIMIT:
			return action.limit
		default:
			return state
	}
}

const companiesById = (state=initialState.companiesById, action) => {
	switch(action.type){
		case types.DATA_LOAD_SUCCESS:
			return Object.assign({}, state,
				action.data.reduce((acc, company) => {
					acc[company.id] = company
					return acc
				}, {})
			)
		default:
			return state
	}
}

const entities = (state=initialState.entities, action) => {
	switch(action.type){
		case types.DATA_LOAD_SUCCESS:
			return action.data.map(company => company.id)
		default:
			return state
	}
}

const rootReducer = combineReducers({
	companiesById,
	entities,
	currentPage,
	limit
})

export const getCompaniesByPage = (state, page, limit) => {
	let start = (page*limit)
	return state.slice(start, start+limit)
}

export const getCompanyById = (state, id) => {
	return state[id]
}

export default rootReducer
