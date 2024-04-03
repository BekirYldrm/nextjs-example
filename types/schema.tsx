

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
