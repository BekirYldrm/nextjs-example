import Input, { Inputs } from '@/components/Input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import YupPassword from 'yup-password'
import { schema } from './register'
YupPassword(yup)




const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<Inputs>({resolver: yupResolver(schema)})


    const onSubmit = (data: Inputs) => console.log(data)


    return (

        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 >Login To Your Account</h4>


                <Input
                    id="02042024-login-email"
                    name="email"
                    type="text"
                    register={register}
                    message={errors.email?.message}


                />

                <Input
                    id="02042024-login-password"
                    name="password"
                    type="password"
                    register={register}
                    message={errors.password?.message}

                />

                <button className='btn' type='submit'>Login</button>
            </form>
        </div>
    )
}



export default Login