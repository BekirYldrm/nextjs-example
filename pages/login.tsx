import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { UserLogin } from '@/types/Type'
import { loginSchema } from '@/types/Schema'
import InputLogin from '@/components/InputLogin'
import postLogin from '@/api/postLogin'
import { useRouter } from 'next/router'


const Login = () => {

    const router = useRouter();

    const email = router.query.email
    const password = router.query.password

    const { register, formState: { errors }, handleSubmit } = useForm<UserLogin>({ resolver: yupResolver(loginSchema) })

    const onSubmit = (data: UserLogin) => postLogin(data)
    return (

        <div className='container form-div'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 >Login</h4>
                <InputLogin type="text" name="email" register={register} message={errors.email?.message} value={email} />
                <InputLogin type="text" name="password" register={register} message={errors.password?.message} value={password} />
                <button className='btn-custom' type='submit'>Login</button>
            </form>
        </div>
    )
}



export default Login