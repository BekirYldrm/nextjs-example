import { DateData, FilterProps } from '@/types/Type';
import React from 'react'
import { useForm } from 'react-hook-form';

const Filter = (props: FilterProps) => {

    const { handleSubmit, register } = useForm<DateData>()

    function clickHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        props.clickHandler(event);
    }


    return (
        <div className='home-top-div col-xxl-5 col-xl-7'>
            <form onSubmit={handleSubmit(props.sumbitDate)} className='date-form'>
                <input type='datetime-local' placeholder='Start Date' className='date-input' {...register('startDate')} />
                <input type='datetime-local' placeholder='End Date' className='date-input' {...register('endDate')} />
                <button className='btn btn-light btn-outline-danger '>Search</button>
            </form>

            <button className='add-button btn btn-light btn-outline-danger ' onClick={clickHandler} >+</button>
        </div>
    )
}
export default Filter