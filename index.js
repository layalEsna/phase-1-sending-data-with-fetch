
function submitData(name, email) {
    const obj = {
        name: name, email: email
    }

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(obj)
    }
    return fetch('http://localhost:3000/users', config)
        .then(res => {
            if (!res.ok) {
                throw new Error('Something went wrong!')
            }
            return res.json()
        })
        .then(data => {
            const p = document.createElement('p')
            p.textContent = data.id
            document.body.appendChild(p)

        })
        .catch(error => {

            const p = document.createElement('p')
            p.textContent = `Error ${error.message}`
            document.body.appendChild(p)

        })
}
