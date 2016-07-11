import { createSelector } from 'reselect'
import fuse from 'fuse.js'

const companiesById = state => state.companiesById
const entities = state => state.entities
const searchFilter = state => state.searchFilter
const currentPage = state => state.currentPage
const limit = state => state.limit

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
      return (new fuse(companies, {
        keys: ['companyName']
      })).search(keyword)
      // return companies.filter(company => company.companyName.toLowerCase().search(keyword.toLowerCase()) > -1)
    }
    return companies
  }
)

export const getVisiblePages = createSelector(
  [getVisibleCompanies, entities, searchFilter, limit],
  (filteredCompanies, allCompanies, keyword, limit) => {
    if(keyword){
      return 1
    }
    return Math.ceil(allCompanies.length / limit)
  }
)

export const getCompanyById = (state, props) => state[props]
