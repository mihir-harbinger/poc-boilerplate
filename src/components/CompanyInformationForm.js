import React from 'react'

const CompanyInformationForm = ({company}) => {
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
    <form className="ui form">
      <div className="ui equal width form">
        <div className="fields">
          <div className="field">
            <label>Company Name</label>
            <input type="text" placeholder="Company Name" defaultValue={companyName} />
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
        <div className="fields">
          <div className="field">
            <label>Customer Service Improvement</label>
            <div className="ui right labeled input">
              <div className="ui label">$</div>
              <input type="text" placeholder="Amount" defaultValue={customerServiceImprovement} />
              <div className="ui basic label">.00</div>
            </div>
          </div>
        </div>
        <div className="fields">
          <div className="field">
            <label>Productivity Improvement</label>
            <div className="ui right labeled input">
              <div className="ui label">$</div>
              <input type="text" placeholder="Amount" defaultValue={productivityImprovement} />
              <div className="ui basic label">.00</div>
            </div>
          </div>
        </div>
        <div className="fields">
          <div className="field">
            <label>Estimated Annual Net Profit Improvement</label>
            <div className="ui right labeled input">
              <div className="ui label">$</div>
              <input type="text" placeholder="Amount" defaultValue={estimatedAnnualProfitImprovement} />
              <div className="ui basic label">.00</div>
            </div>
          </div>
        </div>
        <div className="fields">
          <div className="field">
            <label>Equivalent Additional Annual Revenue</label>
            <div className="ui right labeled input">
              <div className="ui label">$</div>
              <input type="text" placeholder="Amount" defaultValue={equivalentAdditionalAnnualRevenue} />
              <div className="ui basic label">.00</div>
            </div>
          </div>
        </div>
        <button className="ui right floated button">Update Information</button>
      </div>
    </form>
  )
}

export default CompanyInformationForm
