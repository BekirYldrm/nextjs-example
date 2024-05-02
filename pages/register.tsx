import InputRegister from '@/components/InputRegister'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { UserRegister } from '@/types/Type'
import { registerSchema } from '@/types/Schema'
import postRegister from '@/api/postRegister'

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<UserRegister>({ resolver: yupResolver(registerSchema) })

    const onSubmit = (data: UserRegister) => postRegister(data)

    return (
        <div className='container form-div'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <h4 >Sign Up</h4>
                <InputRegister type='text' name='email' register={register} message={errors.email?.message} />
                <InputRegister type="text" name='name' register={register} message={errors.name?.message} />
                <InputRegister type="text" name='lastname' register={register} message={errors.lastname?.message} />
                <InputRegister type="text" name='password' register={register} message={errors.password?.message} />
                <InputRegister type="text" name='passwordRepeat' register={register} message={errors.passwordRepeat?.message} />
                <button className='btn-custom' type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Register


