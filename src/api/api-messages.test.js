import React from 'react'
import {
  render,
  screen,
  cleanup,
  waitForElement,
  act,
} from '@testing-library/react'
import { getMessages, sendMessage } from './api-message'
import axios from 'axios'

// jest.mock('axios')

jest.spyOn(console, 'error').mockImplementation(() => {})
jest.mock('axios', () => ({
  ...jest.requireActual('axios'),
  get: jest.fn(),
}))

const headers = {
  token: 'vbFGRPXJJqnYTD0bpkm9yg',
  client: 'fbKR813jCnt-xWemtQf30A',
  expiry: 1644849126,
  uid: 'jianne2@example.com',
}

describe('Test for message API', () => {
  test('send message api', async () => {
    const mockParams = {
      receiver_class: 'User',
      receiver_id: 1648,
      body: 'hello',
      headers: headers,
    }
    const mockResponse =
      //   data: {
      //     id: 14626,
      //     body: 'hello',
      //     message_reference_id: 2388,
      //     created_at: '2022-02-09T01:24:51.615Z',
      //     updated_at: '2022-02-09T01:24:51.615Z',
      //   },
      // }
      {
        data: [
          {
            id: 14630,
            body: 'hello from 1634 jianne1',
            created_at: '2022-02-09T03:06:47.318Z',
            sender: {
              id: 1648,
              provider: 'email',
              uid: 'hellojianne@example.com',
              allow_password_change: false,
              name: null,
              nickname: null,
              image: null,
              email: 'hellojianne@example.com',
              created_at: '2022-02-03T12:05:54.462Z',
              updated_at: '2022-02-09T03:12:29.091Z',
            },
            receiver: {
              id: 1635,
              provider: 'email',
              uid: 'jianne2@example.com',
              allow_password_change: false,
              name: null,
              nickname: null,
              image: null,
              email: 'jianne2@example.com',
              created_at: '2022-01-31T14:32:05.934Z',
              updated_at: '2022-02-09T03:17:18.226Z',
            },
          },
        ],
      }
    const baseURL = process.env.REACT_APP_AVION_SLACK_API

    axios.get.mockResolvedValue(mockResponse)
    const response = await getMessages(mockParams)
    expect(axios.get).toHaveBeenCalledWith(`${baseURL}api/v1/messages`)
    expect(response).toEqual(mockResponse)
  })
})
