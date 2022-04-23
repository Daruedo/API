const url="http://localhost:5500/api"
const newUser = {
    name: "Olivia Fernandes",
    avatar: "http://lorempixel.com.br/500/400/?1",
    city: "Rio do Sul"
}
const userUpdated = {
    name: "Francisco Roberto",
    avatar: "http://lorempixel.com.br/500/400/?1",
    city: "Recife"
}


function getUser(){
    axios.get(url)
    .then(response => {
        const data =  response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.error(error))
}

// getUser()

function getOneUser(){
    axios.get(`${url}/8`)
    .then(response => {
        const data =  response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.error(error))
}

getOneUser()

function addNewUser() {
    axios.post(url, newUser)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

// addNewUser()

function updateUser(){
    axios.put(`${url}/2`, userUpdated)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

// updateUser()

function deleteUser(){
    axios.delete(`${url}/11`)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

//deleteUser()
