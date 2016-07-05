import React from 'react'

const CompanyInformationReadOnly = ({company}) => {
  const {
    companyName,
    currentDisengagement,
    targetDisengagement,
    productivityImprovement,
    customerServiceImprovement,
    estimatedAnnualProfitImprovement,
    equivalentAdditionalAnnualRevenue
  } = company

  return(
    <div>
      <h4>Company Information</h4>
    </div>
  )
}

export default CompanyInformationReadOnly
