import findUser from '@/api/findUser';
import Home from '@/components/Home';
import { UserData } from '@/types/Type';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const User = () => {
    const router = useRouter();
    const [state, setState] = useState<UserData>();

    const id = router.query.id!
    const email = router.query.email!
    const password = router.query.password!

    useEffect(() => {
        if (typeof id === 'string' && typeof email === 'string' && typeof password === 'string') {
            findUser(id).then(user => {
                if (user.password === password && user.email === email) {
                    setState(user)
                }
            })
        }
    }, [id, email, password,state])


    return (state && <Home userData={state} />)

}

export default User;