import { actionSchema } from '@/types/Schema';
import { EditFormProps, formActionData } from '@/types/Type'
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';

const EditForm = ({ sumbitForm, clickHandler }: EditFormProps) => {

  const { handleSubmit, register, formState: { errors } } = useForm<formActionData>({ resolver: yupResolver(actionSchema) })

  function closeForm(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    clickHandler(null);
  }

  return (
    <form className='home-form col-3' onSubmit={handleSubmit(sumbitForm)}>
      <h2 className='home-form-header'>CREATE/EDIT</h2>

      <input className='home-form-input' type="text" placeholder='Description' {...register("description")} />
      <p>{errors.description?.message}</p>
      <input className='home-form-input' type="number" placeholder='Money' step="0.01" {...register("money")} />
      <p>{errors.money?.message}</p>
      <select className='form-select'  {...register("type")}>
        <option value="Income">Income</option>
        <option value="Outcome">Outcome</option>
      </select>
      <p>{errors.type?.message}</p>
      <button className='btn  btn-success' type='submit'>Save</button>
      <button className='btn  btn-outline-danger btn-sm home-form-close-button' onClick={closeForm}>X</button>
    </form>
  )
}

export default EditForm