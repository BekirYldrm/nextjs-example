import React, { useState } from 'react'
import Balance from './Balance'
import Filter from './Filter'
import PieChart from './PieChart'
import Table from './Table'
import EditForm from './EditForm'
import { DateData, HomeProps, formActionData, postActionData } from '@/types/Type'
import postAction from '@/api/postAction'
import patchAction from '@/api/patchAction'


const Home = ({ userData }: HomeProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<string>()
    const [endDate, setEndDate] = useState<string>()
    const [actionId, setActionId] = useState<number | null>(null)

    const clickHandler = (id: number | null) => {
        setIsOpen(!isOpen)
        setActionId(id)
    }

    const sumbitForm = (data: formActionData) => {
      
        const postData: postActionData = {
            ...data,
            userId: userData.id
        }

        if(actionId === null) {
            postAction(postData)
        }
        else {
            data.id = actionId
            patchAction(data)
        }
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
                <Table startDate={startDate} endDate={endDate} array={userData.actions} clickHandler={clickHandler} />
            </div>

            {isOpen && (
                <EditForm sumbitForm={sumbitForm} clickHandler={clickHandler} />
            )}
        </div>
    )
}

export default Home