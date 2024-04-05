import Input from '@/components/Input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"

import { Inputs } from '@/types/Type'
import { schema } from '@/types/Schema'


const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<Inputs>({resolver: yupResolver(schema)})

    const onSubmit = (data: Inputs) => console.log(data)
    
    console.log(errors);


    return (

        <div className='container form-div'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 >Login</h4>
              
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

                <button className='btn-custom' type='submit'>Login</button>
            </form>
        </div>
    )
}



export default Login