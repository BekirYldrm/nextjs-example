import React, { MouseEventHandler } from "react"
import { Path, SubmitHandler, UseFormRegister } from "react-hook-form"

export interface UserData {
  id: number
  name: string
  lastname: string
  email: string
  balance: number
  password: string
  actions: Array<ActionData>
}
export interface ActionData {
  id: number
  date: string
  description: string
  money: number
  type: string
}
export interface postActionData {
  description: string
  money: number
  type: string
  userId: number
}

export interface formActionData {
  description: string
  money: number
  type: string
}

export interface DateData {
  startDate: string | undefined
  endDate: string | undefined
}

export interface UserRegister {
  email: string
  name: string
  lastname: string
  password: string
  passwordRepeat: string
}

export interface InputRegisterProps {
  name: Path<UserRegister>;
  type: string;
  register: UseFormRegister<UserRegister>
  message: string | undefined
}


export interface UserLogin {
  email: string
  password: string
}
export interface InputLoginProps {
  name: Path<UserLogin>;
  type: string;
  register: UseFormRegister<UserLogin>
  message: string | undefined
}


export interface HomeProps {
  userData: UserData
}

export interface BalanceProps {
  balance: number
}

export interface TableProps {
  startDate: string | undefined
  endDate: string | undefined
  array: Array<ActionData>
}

export interface PieChartProps {
  array: Array<ActionData>
}


export interface FilterProps {
  clickHandler: MouseEventHandler<HTMLButtonElement>
  sumbitDate: SubmitHandler<DateData>
}
export interface EditFormProps {
  sumbitForm: SubmitHandler<formActionData>
  clickHandler: MouseEventHandler<HTMLButtonElement>
}

