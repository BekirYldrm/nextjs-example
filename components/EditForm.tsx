import { EditFormProps, TableData } from '@/types/Type'
import React from 'react'
import { useForm } from 'react-hook-form';

const EditForm = ({ sumbitForm }: EditFormProps) => {

  const { handleSubmit, register } = useForm<TableData>()

  return (

    <form className='home-form col-3' onSubmit={handleSubmit(sumbitForm)}>
      <h2 className='home-form-header'>CREATE/EDIT</h2>
      <input className='home-form-input' type="text" placeholder='Description' {...register('description')} />
      <input className='home-form-input' type="number" placeholder='Money'  {...register('money')} />
      <select className='form-select'   {...register('type')}>
        <option value="Income">Income</option>
        <option value="OutCome">OutCome</option>
      </select>
      <button className='btn  btn-success' type='submit'>Save</button>
    </form>

  )
}

export default EditForm