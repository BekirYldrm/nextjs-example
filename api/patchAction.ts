import { ActionData, formActionData } from "@/types/Type"

const patchAction = async (request: formActionData) => {


    try {
        const response = await fetch('http://localhost:8080/action', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        })

        const responseData:ActionData = await response.json()
    }
    catch (err) { console.error(err) }
}

export default patchAction;


