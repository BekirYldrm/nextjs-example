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



        if (response.status === 200) {
            const responseData = await response.json()
            alert("Kullanici Kayit Oldu.Giris Sayfasina Yönlendirileceksiniz...")
            router.push(`/login?email=${responseData.email}&password=${responseData.password}`)
        }
        else {
            alert("Kullanici Kayit Olurken Bir Hata Meydana Geldi")
        }
    }
    catch (err) { console.error(err) }
}

export default postRegister;


