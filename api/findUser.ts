async function findUser(id: string) {

    try {
        const response = await fetch(`http://localhost:8080/users/${id}`, {
            method: 'GET',
        }
        )
        const responseData = await response.json()

        return responseData

    }
    catch (err) { console.error(err) }
}

export default findUser