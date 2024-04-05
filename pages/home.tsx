
import PieChart from '@/components/PieChart'
import React from 'react'

const home = () => {

  return (
    <div className='container home-div'>
      <div className='ust-div'>
        <div className='balance-div'>
          <h2>Balance:</h2>
          <p className='home-p'>100 TL</p>
        </div>
        <div className='pasta-div'>
          <PieChart/>
        </div>
      </div>
      <div className='ust-div'>
        <div className='button-div'>
        <button type="button" className="btn btn-light btn-outline-secondary btn-lg">Start Date</button>
          <button className='btn btn-light btn-light btn-outline-secondary btn-lg'>End Date</button>
          <button className='btn btn-light btn-outline-danger btn-lg'>Search</button>
          <button className='add-button btn btn-light btn-outline-danger btn-lg'>+</button>
        </div>
        <div className='table-div'>

        </div>
      </div>
    </div>
  )
}

export default home