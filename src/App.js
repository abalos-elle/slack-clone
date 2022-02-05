import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Register from './forms/Register/Register'
import Login from './forms/Login/Login'
import DefaultErrorPage from './components/Errors/DefaultErrorPage'
import Home from './Home'
import Messages from './components/Messages/Messages'
import CreateNewMessage from './components/Messages/CreateNewMessage'
import Channel from './components/Channel/Channel'

function App() {
  const [authenticated, setAuthenticated] = useState(null)
  useEffect(() => {
    let headers = sessionStorage.getItem('userLoggedInDetails')
    headers && JSON.parse(headers)
      ? setAuthenticated(true)
      : setAuthenticated(false)
  }, [])

  return (
    <Routes>
      {!authenticated && (
        <>
          <Route
            path="/login"
            element={<Login authenticate={() => setAuthenticated(true)} />}
          />
          <Route
            path="/"
            element={<Login authenticate={() => setAuthenticated(true)} />}
          />
          <Route path="/register" element={<Register />} />
        </>
      )}

      {authenticated && (
        <>
          <Route path="/" element={<Home />}>
            {/* TODO: add logout (fake logout created) */}
            <Route path=":uid/" element={<CreateNewMessage />} />
            <Route path=":uid/new-message/" element={<CreateNewMessage />} />
            {/* TODO: add receiver ID as param */}
            <Route path=":uid/messages/:id" element={<Messages />} />
            <Route path=":uid/channels/:channelName" element={<Channel />} />
          </Route>
        </>
      )}
      <Route path="/404" element={<DefaultErrorPage />} />
      <Route path="*" element={<DefaultErrorPage />} />
    </Routes>
  )
}

export default App
