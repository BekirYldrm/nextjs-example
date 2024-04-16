import { InputProps } from '@/types/Type'
import React from 'react'

const Input = ({ name, register, type, message }: InputProps) => {
  return (
    <>
      <input className='form-input' type={type} placeholder={name}   {...register(name)} />
      <p>{message}</p>
    </>
  )
}


export default Input