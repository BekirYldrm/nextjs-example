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

        if (response.status === 200) {
            const responseData = await response.json()

            alert("Kullanici girisi yaptiniz.Ana sayfaya yönledirliyorsunuz...")

            router.push(`/${responseData.id}?email=${request.email}&password=${request.password}`)
        }
        else if (response.status === 401) {
            alert("Kullanici şifresi yanlistir, lütfen tekrar deneyiniz...")
        }
        else if (response.status === 404) {
            alert("Email adresine bagli kullanici yoktur, lütfen tekrar deneyiniz...")
        }
        else {
            alert("Beklenmeyen bir hata olustu. Lütfen daha sonra tekrar deneyiniz.");
        }

    }
    catch (err) { console.error(err) }
}

export default postLogin;

