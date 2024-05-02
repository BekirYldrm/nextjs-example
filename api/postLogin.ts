import { UserLogin } from "@/types/Type"
import router from "next/router"
import findUser from "./findUser"

const postLogin = async (request: UserLogin) => {


    try {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        })

        const responseData = await response.json()
        if (responseData !== null) {
            alert("Kullanici Girisi yaptiniz.Ana Sayfaya Yönledirliyorsunuz...")

            router.push(`/${responseData.id}?email=${request.email}&password=${request.password}`)
        }
        else {
            console.log(responseData);

        }

    }
    catch (err) { console.error(err) }
}

export default postLogin;

