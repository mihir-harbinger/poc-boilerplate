import { createSelector } from 'reselect'

const companiesById = state => state.companiesById
const entities = state => state.entities
const searchFilter = state => state.searchFilter
const currentPage = state => state.currentPage
const limit = state => state.limit

const getCompanies = createSelector(
  [companiesById, entities, currentPage, limit],
  (companiesById, entities, currentPage, limit) => {
    let start = currentPage*limit
    return (entities.slice(start, start + limit)).map(id => companiesById[id])
  }
)

export const getVisibleCompanies = createSelector(
  [searchFilter, getCompanies],
  (keyword, companies) => {
    if(keyword){
      return companies.filter(company => company.companyName.search(keyword) > -1)
    }
    return companies
  }
)

export const getVisiblePages = createSelector(
  [getVisibleCompanies, entities, searchFilter, limit],
  (filteredCompanies, allCompanies, keyword, limit) => Math.ceil(keyword ? filteredCompanies.length : allCompanies.length / limit)
)
