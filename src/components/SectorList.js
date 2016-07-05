import React from 'react'

const SectorList = ({sectors}) => {
  return(
    <div>
      {
        sectors.map(sector => <div key={sector} className="ui label">{sector}</div>)
      }
    </div>
  )
}

export default SectorList
