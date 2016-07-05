import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import { getCompaniesByPage, getCompanyById } from '../reducers'
import { changePage, changeLimit } from '../actions'
import { THEAD, TBODY, TFOOT } from '../components/TableComponents'

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleLimitChange = this.handleLimitChange.bind(this)
    this.actions = this.props.actions
  }
  handlePageChange(page){
    if(page >= 0 && page < this.props.pages){
      this.actions.changePage(page)
    }
  }
  handleLimitChange(limit){
    this.actions.changeLimit(limit)
  }
  render(){
    const { companies, pages, currentPage, actions } = this.props
    const headings = ["id", "Company", "Sectors", "Total Employees", "Updated By", "Updated On", "Actions"]
    return(
      <div>
        <h2 className="ui header">
          Dashboard
          <div className="sub header">Sample text. Let user know what to do on this page.</div>
        </h2>
        <table className="ui selectable celled table">
          <THEAD headings={headings} />
          <TBODY companies={companies} columns={headings.length} />
          <TFOOT pages={pages} currentPage={currentPage} columns={headings.length} onChangePage={this.handlePageChange} />
        </table>
      </div>
    )
  }
}
const mapStateToProps = state => {
  const { companiesById, entities, currentPage, limit } = state
  return {
    companies: getCompaniesByPage(entities, currentPage, limit).map(id => getCompanyById(companiesById, id)),
    pages: Math.ceil(entities.length / limit),
    limit,
    currentPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({changePage, changeLimit}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
