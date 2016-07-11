import React from 'react'

const CompanyInformationForm = ({company}) => {
  const {
    companyName,
    totalEmployees,
    currentDisengagement,
    targetDisengagement,
    averageSalary,
    annualRevenue,
    productivityImprovement,
    customerServiceImprovement,
    estimatedAnnualProfitImprovement,
    equivalentAdditionalAnnualRevenue
  } = company

  return(
    <form className="ui form">
      <div className="ui equal width form">
        <div className="fields">
          <div className="field">
            <label>Company Name</label>
            <input type="text" placeholder="Company Name" defaultValue={companyName} />
          </div>
        </div>
        <h4 className="ui dividing header">Disengagement Level</h4>
        <div className="fields">
          <div className="field">
            <label>Total Employees</label>
            <input type="text" placeholder="Current Disengagement" defaultValue={totalEmployees} />
          </div>
        </div>
        <div className="fields">
          <div className="field">
            <label>Current Disengagement</label>
            <input type="text" placeholder="Current Disengagement" defaultValue={currentDisengagement} />
          </div>
          <div className="field">
            <label>Target Disengagement</label>
            <input type="text" placeholder="Target Disengagement" defaultValue={targetDisengagement} />
          </div>
        </div>
        <h4 className="ui dividing header">Salary Revenue</h4>
        <div className="fields">
          <div className="field">
            <label>Average Salary</label>
            <div className="ui right labeled input">
              <div className="ui label">$</div>
              <input type="text" placeholder="Amount" defaultValue={averageSalary} />
              <div className="ui basic label">.00</div>
            </div>
          </div>
        </div>
        <div className="fields">
          <div className="field">
            <label>Annual Revenue</label>
            <div className="ui right labeled input">
              <div className="ui label">$</div>
              <input type="text" placeholder="Amount" defaultValue={annualRevenue} />
              <div className="ui basic label">.00</div>
            </div>
          </div>
        </div>
        <div className="fields">
          <div className="field">
            <label>Net Margin</label>
            <div className="ui right labeled input">
              <input type="text" placeholder="Amount" defaultValue={equivalentAdditionalAnnualRevenue} />
              <div className="ui basic label">&nbsp;&nbsp;&nbsp;%</div>
            </div>
          </div>
        </div>
        <button className="ui right floated button">Update Information</button>
      </div>
    </form>
  )
}

export default CompanyInformationForm
