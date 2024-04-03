import Input, { Inputs } from '@/components/Input'
import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<Inputs>({})


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
                    required={{ value: true, message: 'Email boş olmaz' }}
                    message={errors.email?.message}


                />

                <Input
                    id="02042024-login-password"
                    name="password"
                    type="password"
                    register={register}
                    required={{ value: true, message: 'Password boş olmaz' }}
                    message={errors.password?.message}

                />

                <button className='btn' type='submit'>Login</button>
            </form>
        </div>
    )
}



export default Login