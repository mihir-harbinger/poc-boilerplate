import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getCompanyById } from '../selectors'
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
        <div className="ui stackable three column wide grid" style={{marginTop: '20px'}}>
          <div className="six wide column">
            <CompanyInformationForm company={company} />
          </div>
          <div className="ten wide column">
            <CompanyInformationReadOnly company={company} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    company: getCompanyById(state.companiesById, ownProps.params.companyId)
  }
}

export default connect(
  mapStateToProps
)(CompanyInformation)
