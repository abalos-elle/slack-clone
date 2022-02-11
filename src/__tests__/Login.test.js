import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { render, screen, waitFor, act, fireEvent } from '@testing-library/react'
import { userLogin } from '../api/api-auth'
import {
  mockResponse,
  mockParams,
  mockLoginParams,
  mockHeaders,
  mockLoginResponse,
} from '../api/mockData'
import Login from '../forms/Login/Login'
import Home from '../Home'

// mock api calls
jest.mock('../api/api-auth')

describe('Test for logging in user', () => {
  test('Successful POST request to login user', async () => {
    // arrange
    userLogin.mockImplementation((mockLoginParams) => {
      return Promise.resolve(mockLoginResponse)
    })

    // act
    await act(async () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )
    })
    const loginButton = await waitFor(() => screen.getByText('Sign In'))
    await act(async () => {
      fireEvent.click(loginButton)
    })

    // assert
    expect(userLogin).toHaveBeenCalledTimes(1)
  })

  test('Rejected POST request to login user', async () => {
    // arrange
    userLogin.mockImplementation((mockLoginParams) => {
      return Promise.reject(mockLoginResponse)
    })

    // act
    await act(async () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )
    })
    const loginButton = await waitFor(() => screen.getByText('Sign In'))
    await act(async () => {
      fireEvent.click(loginButton)
    })
    const errorMessage = await waitFor(() =>
      screen.getByText(
        'Review the information you have submitted and try again.'
      )
    )

    // assert
    expect(userLogin).toHaveBeenCalledTimes(1)
    expect(errorMessage).toBeInTheDocument()
  })
})
// TODO: register test
describe('Test for registering user', () => {
  test('Successful POST request to login user', async () => {
    // arrange
    userLogin.mockImplementation((mockLoginParams) => {
      return Promise.resolve(mockLoginResponse)
    })

    // act
    await act(async () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )
    })
    const loginButton = await waitFor(() => screen.getByText('Sign In'))
    await act(async () => {
      fireEvent.click(loginButton)
    })

    // assert
    expect(userLogin).toHaveBeenCalledTimes(1)
  })

  test('Rejected POST request to login user', async () => {
    // arrange
    userLogin.mockImplementation((mockLoginParams) => {
      return Promise.reject(mockLoginResponse)
    })

    // act
    await act(async () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )
    })
    const loginButton = await waitFor(() => screen.getByText('Sign In'))
    await act(async () => {
      fireEvent.click(loginButton)
    })
    const errorMessage = await waitFor(() =>
      screen.getByText(
        'Review the information you have submitted and try again.'
      )
    )

    // assert
    expect(userLogin).toHaveBeenCalledTimes(1)
    expect(errorMessage).toBeInTheDocument()
  })
})
