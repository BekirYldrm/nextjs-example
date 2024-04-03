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
  required: {
    value: boolean
    message: string
  }
  message: string | undefined
}

const Input = ({ name, id, register, type, required, message }: Props) => {
  return (
    <>

      <input type={type} id={id}  {...register(name, { required })} placeholder={name} />
      <p>{message}</p>


    </>
  )
}


export default Input