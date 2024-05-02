import React, { useState } from 'react'
import Balance from './Balance'
import Filter from './Filter'
import PieChart from './PieChart'
import Table from './Table'
import EditForm from './EditForm'
import { DateData, HomeProps, formActionData, postActionData } from '@/types/Type'
import postAction from '@/api/postAction'


const Home = ({ userData }: HomeProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<string>()
    const [endDate, setEndDate] = useState<string>()

    const clickHandler: React.MouseEventHandler<HTMLButtonElement> = () => setIsOpen(!isOpen)


    const sumbitForm = (data: formActionData) => {
        const postData: postActionData = {
            ...data,
            userId: userData.id
        }
        postAction(postData)
    }

    const sumbitDate = (data: DateData) => {
        setStartDate(data.startDate)
        setEndDate(data.endDate)
    }

    return (

        <div className='container '>

            <div className=' row  justify-content-evenly'>
                <Balance balance={userData.balance} />
                <Filter clickHandler={clickHandler} sumbitDate={sumbitDate} />
            </div>

            <div className='row  justify-content-evenly'>
                <PieChart array={userData.actions} />
                <Table startDate={startDate} endDate={endDate} array={userData.actions} />
            </div>

            {isOpen && (
                <EditForm sumbitForm={sumbitForm} clickHandler={clickHandler} />
            )}
        </div>
    )
}

export default Home