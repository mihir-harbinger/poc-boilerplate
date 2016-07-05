import { combineReducers } from 'redux'
import * as types from '../constants'

const initialState = {
	companiesById: {},
	entities: []
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
	entities
})

export default rootReducer
