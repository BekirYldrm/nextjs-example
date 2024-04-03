
import Input, { Inputs } from '@/components/Input'
import React from 'react'
import { useForm } from 'react-hook-form'


const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<Inputs>({})


    const onSubmit = (data: Inputs) => console.log(data)



    return (
        <div className='container form-div'>
            <form onSubmit={handleSubmit(onSubmit)} >

                <h3 >Register</h3>

                <Input
                    id='02042024-email'
                    type='text'
                    name='email'
                    register={register}
                    required={{ value: true, message: 'Email Boş Olamaz.' }}
                    message={errors.email?.message}
                />

                <Input
                    id="02042024-name"
                    type="text"
                    name='name'
                    register={register}
                    required={{ value: true, message: 'Name Boş Olmaz' }}
                    message={errors.name?.message}
                />

                <Input
                    id="02042024-lastname"
                    type="text"
                    name='lastname'
                    register={register}
                    required={{ value: true, message: 'Lastname Boş Olmaz' }}
                    message={errors.lastname?.message}
                />
                <Input
                    id="02042024-password"
                    type="text"
                    name='password'
                    register={register}
                    required={{ value: true, message: 'Password Boş Olmaz' }}
                    message={errors.password?.message}
                />

                <Input
                    id="02042024-password-repeat"
                    type="text"
                    name='passwordRepeat'
                    register={register}
                    required={{ value: true, message: 'Password Repeat Boş Olmaz' }}
                    message={errors.passwordRepeat?.message}
                />
                <button className='btn' type='submit'>Signup</button>
            </form>
        </div>


    )
}

export default Register


