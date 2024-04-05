import { Path, UseFormRegister } from "react-hook-form"

export interface Inputs {
    email: string
    name: string
    lastname: string
    password: string
    passwordRepeat: string
  }
  
 export interface Props {
    name: Path<Inputs>;
    type: string;
    id: string
    register: UseFormRegister<Inputs>
  
    message: string | undefined
  }

