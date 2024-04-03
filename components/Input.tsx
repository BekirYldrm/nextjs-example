import React from 'react'
import { Path, UseFormRegister, UseFormStateReturn } from 'react-hook-form'

export interface Inputs {
  email: string
  name: string
  lastname: string
  password: string
  passwordRepeat: string
}

interface Props {
  name: Path<Inputs>;
  type: string;
  id: string
  register: UseFormRegister<Inputs>

  message: string | undefined
}

const Input = ({ name, id, register, type, message }: Props) => {
  return (
    <>

      <input type={type} id={id}  {...register(name)} placeholder={name} />
      <p >{message}</p>


    </>
  )
}


export default Input