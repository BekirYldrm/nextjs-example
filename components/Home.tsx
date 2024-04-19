import React, { useState } from 'react'
import Balance from './Balance'
import Filter from './Filter'
import PieChart from './PieChart'
import Table from './Table'
import EditForm from './EditForm'
import { TableData, BackkendArray, DateData } from '@/types/Type'


const Home = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<string>()
    const [endDate, setEndDate] = useState<string>()
    const [array, setArray] = useState<BackkendArray>([])


    const clickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        setIsOpen(!isOpen)
    }

    const sumbitForm = (data: TableData) => {
        const currentDate = new Date()
        const offset = currentDate.getTimezoneOffset()
        currentDate.setMinutes(currentDate.getMinutes() - offset)
        data.date = currentDate.toISOString().slice(0, 19)
        setArray((prevent) => [...prevent, data])
    }

    const sumbitDate = (data: DateData) => {
        setStartDate(data.startDate)
        setEndDate(data.endDate)
    }
    return (

        <div className='container '>

            <div className=' row  justify-content-evenly'>
                <Balance />
                <Filter clickHandler={clickHandler} sumbitDate={sumbitDate} />
            </div>

            <div className='row  justify-content-evenly'>
                <PieChart />
                <Table startDate={startDate} endDate={endDate} array={array} />
            </div>

            {isOpen && (
                <EditForm sumbitForm={sumbitForm} clickHandler={clickHandler} />
            )}
        </div>
    )
}

export default Home