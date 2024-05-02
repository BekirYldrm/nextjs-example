import { BalanceProps } from '@/types/Type'
import React from 'react'

const Balance = ({ balance }: BalanceProps) => {
    return (
        <div className='home-top-div col-xxl-5 row justify-content-center col-xl-7'>
            <p className='home-p col-3' style={{textAlign:"right"}}>Balance:</p>
            <p className='home-p col-3'>{balance}₺</p>
        </div>
    )
}

export default Balance