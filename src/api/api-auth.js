import axios from 'axios';

// Axios baseURL configuration
const baseUrl = axios.create({
    baseURL: `${process.env.REACT_APP_AVION_SLACK_API}`
})

// User Registration Functionality
export const userRegistration = ({email, password, passwordConfirmation}) => {
    return baseUrl.post('/api/v1/auth/', {
        email, password, passwordConfirmation
    })
    .then(response => response)
    .then(data => data)
    .catch(error => error)
}

// User Login Functionality
export const userLogin = ({email, password}) => {
    return baseUrl.post('/api/v1/auth/sign_in', {
        email, password
    })
    .then(response => response)
    .catch(error => error)
}