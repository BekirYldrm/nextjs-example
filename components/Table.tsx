import { TableProps } from '@/types/Type'
import React from 'react'

const Table = ({ startDate, endDate, array }: TableProps) => {

  return (
    <div className='home-bottom-div col-xxl-5 col-xl-7'>
      <table >
        <thead>
          <tr>
            <th>Date</th>
            <th>Money</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          {
            array.filter(element => {
              if (typeof startDate === "string" && typeof endDate === "string") {
                return element.date <= endDate && element.date >= startDate
              }
            })
              .map(element => {
                return (
                  <tr key={element.id}>
                    <td>{element.date}</td>
                    <td>{element.money}</td>
                    <td>{element.type}</td>
                  </tr>
                )
              })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table