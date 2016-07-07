import { combineReducers } from 'redux'
import * as types from '../constants'

const initialState = {
	searchFilter: '',
	isFetching: false,
	companiesById: {},
	entities: [],
	currentPage: 0,
	limit: 5
}

const searchFilter = (state=initialState.searchFilter, action) => {
	switch(action.type){
		case types.SET_SEARCH_FILTER:
			return action.text
		default:
			return state
	}
}

const isFetching = (state=initialState.isFetching, action) => {
	switch(action.type){
		case types.DATA_LOAD_REQUEST:
			return true
		case types.DATA_LOAD_SUCCESS:
			return false
		default:
			return state
	}
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
		case types.DELETE_COMPANY:
			return deleteCompany(state, action)
		default:
			return state
	}
}

const entities = (state=initialState.entities, action) => {
	switch(action.type){
		case types.DATA_LOAD_SUCCESS:
			return action.data.map(company => company.id)
		case types.DELETE_COMPANY:
			return state.filter(id => !(id===action.id))
		default:
			return state
	}
}

const deleteCompany = (state, action) => {
	switch(action.type){
		case types.DELETE_COMPANY:
			const newState = Object.assign({}, state)
			delete newState[action.id]
			return newState
		default:
			return state
	}
}

const rootReducer = combineReducers({
	searchFilter,
	isFetching,
	companiesById,
	entities,
	currentPage,
	limit
})

export default rootReducer
