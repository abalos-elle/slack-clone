export const mockResponse = {
  data: {
    data: [
      {
        id: 14630,
        body: 'hello testing get message API request',
        created_at: '2022-02-09T03:06:47.318Z',
        sender: {
          id: 1648,
          provider: 'email',
          uid: 'test@example.com',
          created_at: '2022-02-03T12:05:54.462Z',
          updated_at: '2022-02-09T03:12:29.091Z',
        },
        receiver: {
          id: 1635,
          provider: 'email',
          uid: 'testAPI@example.com',
          created_at: '2022-01-31T14:32:05.934Z',
          updated_at: '2022-02-09T03:17:18.226Z',
        },
      },
    ],
  },
}

export const mockParams = {
  receiver_class: 'User',
  receiver_id: 1648,
  body: 'hello testing send message API request',
}

export const mockHeaders = {
  'access-token': 'haXWCLr264GN4T2F5qSSug',
  client: '_690jUPp79Ik24mMmKlQJA',
  expiry: 1626789364,
  uid: 'testAPI@example.com',
}

export const mockLoginParams = {
  email: 'testAPI@example.com',
  password: '12345678',
  headers: mockHeaders,
}

export const mockLoginResponse = {
  data: {
    data: {
      id: 1635,
      email: 'testAPI@example.com',
      provider: 'email',
      uid: 'testAPI@example.com',
      allow_password_change: false,
      name: null,
      nickname: null,
      image: null,
    },
  },
}
