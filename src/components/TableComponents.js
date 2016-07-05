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

export const TBODY = ({companies}) => {
  return(
    <tbody>
    {
      companies.map(company => <TR key={company.id} company={company} />)
    }
    </tbody>
  )
}

export class TR extends Component{
  constructor(props){
    super(props)
    this.navigateToDetails = this.navigateToDetails.bind(this)
  }
  navigateToDetails(id){
    browserHistory.push(`company/${id}`)
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
          <i className="minus circle grey icon" title={`Remove ${companyName}`}></i>
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
