import Input from '@/components/Input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { UserData } from '@/types/Type'
import { schema } from '@/types/Schema'


const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<UserData>({ resolver: yupResolver(schema) })

    const onSubmit = (data: UserData) => console.log(data)
    return (

        <div className='container form-div'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 >Login</h4>
                <Input name="email" type="text" register={register} message={errors.email?.message} />
                <Input name="password" type="password" register={register} message={errors.password?.message} />
                <button className='btn-custom' type='submit'>Login</button>
            </form>
        </div>
    )
}



export default Login