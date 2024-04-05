import { Props } from '@/types/Type'
import React from 'react'
import { Path, UseFormRegister, UseFormStateReturn } from 'react-hook-form'



const Input = ({ name, id, register, type, message }: Props) => {
  return (
    <>

      <input type={type} id={id}  {...register(name)} placeholder={name} />
      <p >{message}</p>

    </>
  )
}


export default Input