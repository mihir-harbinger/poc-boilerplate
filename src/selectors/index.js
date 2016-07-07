import { createSelector } from 'reselect'

//non-memoized selectors
const companiesById = state => state.companiesById
const entities = state => state.entities
const searchFilter = state => state.searchFilter
const currentPage = state => state.currentPage
const limit = state => state.limit

//memoized selectors
const getCompanies = createSelector(
  [companiesById, entities, currentPage, limit, searchFilter],
  (companiesById, entities, currentPage, limit, keyword) => {
    if(keyword){
      return entities.map(id => companiesById[id])
    }
    let start = currentPage*limit
    return (entities.slice(start, start + limit)).map(id => companiesById[id])
  }
)

export const getVisibleCompanies = createSelector(
  [searchFilter, getCompanies],
  (keyword, companies) => {
    if(keyword){
      return companies.filter(company => company.companyName.toLowerCase().search(keyword) > -1)
    }
    return companies
  }
)

export const getVisiblePages = createSelector(
  [getVisibleCompanies, entities, searchFilter, limit],
  (filteredCompanies, allCompanies, keyword, limit) => Math.ceil(keyword ? filteredCompanies.length : allCompanies.length / limit)
)

export const getCompanyById = (state, props) => state[props]
