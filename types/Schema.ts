

import * as yup from "yup"
import YupPassword from 'yup-password'
YupPassword(yup)

export const registerSchema = yup
    .object({
        email: yup.string().email().required(),
        name: yup.string().max(20).required(),
        lastname: yup.string().max(20).required(),
        password: yup.string().password().required(),
        passwordRepeat: yup.string().password().required().oneOf([yup.ref('password')], 'Passwords do not match')
    }).required()

export const loginSchema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().password().required(),
    }).required()

export const actionSchema = yup
    .object({
        type: yup.string().required(),
        description: yup.string().required(),
        money: yup.number().required(),
        id: yup.number().nullable(),
    }).required()