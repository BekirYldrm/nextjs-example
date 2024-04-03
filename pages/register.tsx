
import Input, { Inputs } from '@/components/Input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import YupPassword from 'yup-password'

YupPassword(yup)

export const schema = yup
    .object({
        email: yup.string().email().required(),
        name: yup.string().max(20).required(),
        lastname: yup.string().max(20).required(),
        password: yup.string().password().required(),
        passwordRepeat: yup.string().password().required().oneOf([yup.ref('password')], 'Passwords do not match')
    }).required()




const Register = () => {

    const { register, formState: { errors }, handleSubmit, watch } = useForm<Inputs>({ resolver: yupResolver(schema) })

    function passwordVal() {

        if (watch('password') !==watch('passwordRepeat') ) {
            return "The passwords do not match"

        }

        else {
            return "The passwords match"
        }
    }


    const onSubmit = (data: Inputs) => console.log(data)

    console.log(errors);




    return (
        <div className='container form-div'>
            <form onSubmit={handleSubmit(onSubmit)} >

                <h3 >Register</h3>

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


