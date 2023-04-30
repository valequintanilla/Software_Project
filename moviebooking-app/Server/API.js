import axios from "axios";

const authourizeUser = (email) => {
    const password = ' '
    axios.get('http://localhost:3000/login', {email})
    .then((res) => {
        password = res.body.password
        return password
    }).catch((err) => {
        console.log(err)
    })
}

const registerUser = (email, password) => {
    const status = ''
    axios.post('http://localhost:3000/login', {email, password})
    .then((res) => {
        status = res.body.status
        return status
    }).catch((err) => {
        console.log(err)
    })
}


