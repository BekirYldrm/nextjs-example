import { UserRegister } from "@/types/Type"
import router from "next/router"

const postRegister = async (request: UserRegister) => {


    try {
        const response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        })

        const responseData = await response.json()

        if (responseData.id === undefined) {
            alert("Kullanici Kayit Olurken Bir Hata Meydana Geldi")
        }
        else {
            alert("Kullanici Kayit Oldu.Giris Sayfasina Yönlendirileceksiniz...")
            router.push('/login')
        }
    }
    catch (err) { console.error(err) }
}

export default postRegister;


