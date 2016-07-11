import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import moment from 'moment'

export const THEAD = ({headings}) => {
  return(
    <thead>
      <tr>
      {
        headings.map(heading => <th key={heading}>{heading}</th>)
      }
      </tr>
    </thead>
  )
}

export const TBODY = ({searchFilter, companies, onDelete, columns, currentPage, limit, totalRecords}) => {
  return(
    <tbody>
    {
      companies.map(company => <TR key={company.id} company={company} onDelete={onDelete} />)
    }
    {
      searchFilter === "" &&
      <tr>
        <td colSpan={columns}><p style={{color: '#999', textAlign: 'right'}}><i>Showing {currentPage*limit+1}-{currentPage*limit+limit > totalRecords  ? totalRecords : currentPage*limit+limit} of {totalRecords} records</i></p></td>
      </tr>
    }
    </tbody>
  )
}

export class TR extends Component{
  constructor(props){
    super(props)
    this.navigateToDetails = this.navigateToDetails.bind(this)
    this.deleteCompany = this.deleteCompany.bind(this)
  }
  navigateToDetails(id){
    browserHistory.push(`company/${id}`)
  }
  deleteCompany(e){
    // alert(JSON.stringify(this.props.company.id))
    e.stopPropagation()
    this.props.onDelete(this.props.company.id)
  }
  render(){
    const { id, companyName, sectors, totalEmployees, updatedBy, updatedOn } = this.props.company
    return(
      <tr style={{cursor: 'pointer'}} onClick={() => this.navigateToDetails(id)}>
        <td>{id}</td>
        <td>{companyName}</td>
        <td>{sectors.join(", ")}</td>
        <td>{totalEmployees}</td>
        <td>{updatedBy}</td>
        <td>{moment(updatedOn).format("do of MMMM, YYYY")}</td>
        <td style={{textAlign: 'center'}}>
          <i className="options grey icon" title={`Update ${companyName}`}></i>
          {' '}
          <i className="minus circle grey icon" title={`Remove ${companyName}`} onClick={this.deleteCompany}></i>
        </td>
      </tr>
    )
  }
}

export const TFOOT = ({columns, pages, currentPage, onChangePage}) => {
  let pagination=[];
  for(let i=0;i<pages;i++){
    pagination.push(i)
  }
  return(
    <tfoot>
      <tr>
        <th colSpan={columns}>
          <div className="ui right floated pagination menu">
            <a className="icon item" onClick={() => onChangePage(currentPage-1)}>
              <i className="left chevron icon"></i>
            </a>
            {
              pagination.map(page =>
                <a
                  key={page}
                  className="item"
                  onClick={() => onChangePage(page)}>
                  {page+1}
                </a>
              )
            }
            <a className="icon item" onClick={() => onChangePage(currentPage+1)}>
              <i className="right chevron icon"></i>
            </a>
          </div>
        </th>
      </tr>
    </tfoot>
  )
}

export const Delimiter = ({searchFilter, presets, value, onLimitChange, onFilterChange}) => {
  return(
    <div className="ui grid">
      <div className="two column row">
        <div className="right floated column">
          <div className="ui form">
            <div className="fields">
              <div className="four wide field"></div>
              <div className="eight wide field">
                <div className="ui fluid icon input">
                  <input type="text" placeholder="Search by name" defaultValue={searchFilter} onChange={(e) => onFilterChange(e.target.value)} />
                  <i className="search icon"></i>
                </div>
              </div>
              <div className="four wide field">
                <select className="ui dropdown" value={value} onChange={(e) => onLimitChange(+e.target.value)}>
                  {
                    presets.map(preset => <option key={preset} value={preset}>{preset} Records</option>)
                  }
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const NoDataFound = () => {
  return(
    <h2 className="ui center aligned icon header grey">
      <i className="meh icon"></i>
      <div className="content">
        No data found
        <div className="sub header">Couldn't find anything that matches the keyword.</div>
      </div>
    </h2>
  )
}
