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
    <div className="ui three statistics">
      <div className="statistic">
        <div className="value">{currentDisengagement}%</div>
        <div className="label">Current</div>
      </div>
      <div className="statistic">
        <div className="value">{targetDisengagement}%</div>
        <div className="label">Target</div>
      </div>
      <div className="teal statistic">
        <div className="value">{currentDisengagement - targetDisengagement}%</div>
        <div className="label" style={{color: '#00B5AD'}}>Net Decrease</div>
      </div>
    </div>
    <h4>Disengagement Level</h4>
    <p>Starting disengagement level {currentDisengagement}%. This corresponds to an engagement level of {100-currentDisengagement}%</p>
      <p>
      Using WorkplaceDynamics survey data, the best of 50% of improvers lowered their disengagement level.
      The top 25% lowered their disengagement 13 points to 36% over the same period.
      </p>
      <h4>Estimated Quality Improvement</h4>
      <p>The estimated QA/Customer Service expenses improvement due to the decrease in disengagement.
      Of the time the disengaged employees are productive, they generate quality and customer service issues at an estimated 4.8% of revenue
      </p>
      <h4>Estimated Annual Expense Reduction</h4>
      <p>
      The estimated annual expense reduction due to decreasing the disengagement level from {currentDisengagement}% to {targetDisengagement}%
      which drops right to the bottom line, improving it by 75%.
      </p>
    </div>
  )
}

export default CompanyInformationReadOnly
