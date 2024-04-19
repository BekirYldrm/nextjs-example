import React from "react"
import { Path, SubmitHandler, UseFormRegister } from "react-hook-form"

export interface UserData {
  email: string
  name: string
  lastname: string
  password: string
  passwordRepeat: string
}

export interface InputProps {
  name: Path<UserData>;
  type: string;
  register: UseFormRegister<UserData>
  message: string | undefined
}
export interface TableProps {
  startDate: string | undefined
  endDate: string | undefined
  array: BackkendArray
}
export interface FilterProps {
  clickHandler: React.MouseEventHandler<HTMLButtonElement>
  sumbitDate: SubmitHandler<DateData>
}
export interface EditFormProps {
  sumbitForm: SubmitHandler<TableData>
  clickHandler: React.MouseEventHandler<HTMLButtonElement>
}


export type BackkendArray = Array<TableData>

export interface TableData {
  id: number
  date: string
  description: string
  money: number
  type: string
}

export interface DateData {
  startDate: string | undefined
  endDate: string | undefined
}