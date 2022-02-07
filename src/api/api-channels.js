import axios from 'axios';

// Create new axios instance
let userHeaders = JSON.parse(sessionStorage.getItem('userLoggedInDetails'))
let axiosFetch = userHeaders ? axios.create({
    baseURL: `${process.env.REACT_APP_AVION_SLACK_API}`,
    headers: {
        'access-token': userHeaders['access-token'],
        client: userHeaders.client,
        expiry: userHeaders.expiry,
        uid: userHeaders.uid
    }
})
: null

// Connect to API to create a channel
export const channelCreate = async ({ name, user_ids }) => {
    try {
        const response = await axiosFetch.post('/api/v1/channels', {name, user_ids })
        return response;
    } catch (error) {
        return error;
    }
}

// Connect to API to get all channels
export const channelsGet = async () => {
    try {
        const response = await axiosFetch.get('/api/v1/channels')
        return response;
    } catch (error) {
        return error;
    }
}

// Connect to API to get all user-owned channels
export const channelsOwnedGet = async () => {
    try {
        const response = await axiosFetch.get('/api/v1/channel/owned')
        return response;
    } catch (error) {
        return error;
    }
}

// Connect to API to get channel details via channel ID
export const channelDetailsGet = async (channelId) => {
    try {
        const response = await axiosFetch.get(`/api/v1/channels/${channelId}`)
        return response;
    } catch (error) {
        return error;
    }
}