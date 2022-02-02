import axios from 'axios'
import { sampleResponse } from './sampleResponse'
const axiosFetch = axios.create({
  baseURL: 'http://206.189.91.54/api/v1',
  headers: {
    'access-token': sampleResponse.token,
    client: sampleResponse.client,
    expiry: sampleResponse.expiry,
    uid: sampleResponse.uid,
  },
})

export const sendMessage = async ({ receiver_id, receiver_class, body }) => {
  try {
    const response = await axiosFetch.post('/messages', {
      receiver_id,
      receiver_class,
      body,
    })
    console.log(response)
    return response
  } catch (error) {
    return error
  }
}

export const getMessages = async ({ receiver_id, receiver_class }) => {
  try {
    const response = await axiosFetch.get('/messages', {
      params: { receiver_class, receiver_id },
    })
    return response
  } catch (error) {
    return error
  }
}

export const getSpecificUser = async ({
  id,
  headers: { token, client, expiry, uid },
}) => {
  try {
    const response = await axiosFetch.get('/api/v1/users')
    const result = response
    return result.data.data.filter((data) => data.id === id)
  } catch (error) {
    return error
  }
}
