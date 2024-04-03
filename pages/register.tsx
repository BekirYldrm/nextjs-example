
import Input from '@/components/Input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"

import { Inputs } from '@/types/type'
import { schema } from '@/types/schema'




const Register = () => {

    const { register, formState: { errors }, handleSubmit, watch } = useForm<Inputs>({ resolver: yupResolver(schema) })

    const onSubmit = (data: Inputs) => console.log(data)

    console.log(errors);


    return (
        <div className='container form-div'>
            <form onSubmit={handleSubmit(onSubmit)} >

                <h4 >Sign Up</h4>

                <Input
                    id='02042024-email'
                    type='text'
                    name='email'
                    register={register}
                    message={errors.email?.message}
                />

                <Input
                    id="02042024-name"
                    type="text"
                    name='name'
                    register={register}
                    message={errors.name?.message}
                />

                <Input
                    id="02042024-lastname"
                    type="text"
                    name='lastname'
                    register={register}
                    message={errors.lastname?.message}
                />
                <Input
                    id="02042024-password"
                    type="text"
                    name='password'
                    register={register}
                    message={errors.password?.message}
                />

                <Input
                    id="02042024-password-repeat"
                    type="text"
                    name='passwordRepeat'
                    register={register}
                    message={errors.passwordRepeat?.message}
                />
                <button className='btn' type='submit'>Signup</button>
            </form>
        </div>


    )
}

export default Register


