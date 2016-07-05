import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getCompanyById } from '../reducers'
import SectorList from '../components/SectorList'
import CompanyInformationForm from '../components/CompanyInformationForm'
import CompanyInformationReadOnly from '../components/CompanyInformationReadOnly'

class CompanyInformation extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const { company } = this.props
    return(
      <div>
        <h1>{company.companyName}</h1>
        <SectorList sectors={company.sectors} />
        <div className="ui stackable two column grid" style={{marginTop: '20px'}}>
          <div className="column">
            <CompanyInformationForm company={company} />
          </div>
          <div className="column">
            <CompanyInformationReadOnly company={company} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {companyId} = ownProps.params
  return {
    company: getCompanyById(state.companiesById, companyId)
  }
}

export default connect(
  mapStateToProps
)(CompanyInformation)
