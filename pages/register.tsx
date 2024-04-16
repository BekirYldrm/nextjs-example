
import Input from '@/components/Input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { UserData } from '@/types/Type'
import { schema } from '@/types/Schema'


const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<UserData>({ resolver: yupResolver(schema) })

    const onSubmit = (data: UserData) => console.log(data)

    return (
        <div className='container form-div'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <h4 >Sign Up</h4>
                <Input type='text' name='email' register={register} message={errors.email?.message} />
                <Input type="text" name='name' register={register} message={errors.name?.message} />
                <Input type="text" name='lastname' register={register} message={errors.lastname?.message} />
                <Input type="text" name='password' register={register} message={errors.password?.message} />
                <Input type="text" name='passwordRepeat' register={register} message={errors.passwordRepeat?.message} />
                <button className='btn-custom' type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Register


