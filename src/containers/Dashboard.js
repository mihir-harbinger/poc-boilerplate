import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import * as actions from '../actions'
import { getVisibleCompanies, getVisiblePages } from '../selectors'
import { THEAD, TBODY, TFOOT, Delimiter, NoDataFound } from '../components/TableComponents'

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleLimitChange = this.handleLimitChange.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleDeleteCompany = this.handleDeleteCompany.bind(this)
    this.actions = this.props.actions
  }
  handlePageChange(page){
    if((page >= 0 && page < this.props.pages) && (page !== this.props.currentPage)){
      this.actions.changePage(page)
    }
  }
  handleLimitChange(limit){
    this.actions.changeLimit(limit)
  }
  handleDeleteCompany(id){
    if(confirm("Are you sure?")){
      this.actions.deleteCompany(id)
    }
  }
  handleFilterChange(text){
    text = text.trim()
    if(text === "" && this.props.searchFilter !== ""){
      this.actions.setFilterText(text)
    }
    else if(text !== ""){
      this.actions.setFilterText(text)
    }
  }
  render(){
    const { totalRecords, searchFilter, companies, pages, limit, currentPage, actions } = this.props
    const headings = ["No.", "Company Name", "Sectors", "Total Employees", "Updated By", "Updated On", "Actions"]
    const presets = [5, 10, 15]
    return(
      <div>
        <h2 className="ui header">
          Dashboard
          <div className="sub header">Sample text. Let user know what to do on this page.</div>
        </h2>
        <Delimiter
          onLimitChange={this.handleLimitChange}
          onFilterChange={this.handleFilterChange}
          value={limit}
          presets={presets}
          searchFilter={searchFilter}
        />
        {
          companies.length > 0 &&
          <div>
            <table className="ui selectable celled compact table">
              <THEAD headings={headings} />
              <TBODY
                searchFilter={searchFilter}
                companies={companies}
                onDelete={this.handleDeleteCompany}
                columns={headings.length}
                currentPage={currentPage}
                limit={limit}
                totalRecords={totalRecords}
              />
              <TFOOT
                pages={pages}
                currentPage={currentPage}
                columns={headings.length}
                onChangePage={this.handlePageChange}
              />
            </table>
          </div>
        }
        {
          companies.length < 1 &&
          <NoDataFound />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    totalRecords: state.entities.length,
    searchFilter: state.searchFilter,
    companies: getVisibleCompanies(state),
    pages: getVisiblePages(state),
    limit: state.limit,
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
