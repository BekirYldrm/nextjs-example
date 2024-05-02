import { ActionData, postActionData } from "@/types/Type"

const postAction = async (request: postActionData) => {


    try {
        const response = await fetch('http://localhost:8080/action', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        })

        const responseData:ActionData = await response.json()
        
        console.log(responseData);
        

        
    }
    catch (err) { console.error(err) }
}

export default postAction;


