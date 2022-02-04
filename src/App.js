import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Register from './forms/Register/Register'
import Login from './forms/Login/Login'
import DefaultErrorPage from './components/Errors/DefaultErrorPage'
import Home from './Home'
import Messages from './components/Messages'
import Channel from './components/Channel/Channel'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        // Need to implement Outro later on
        <Route path='/home/:uid' element={<Home/>}>
          <Route path='/home/:uid/messages' element={<Home/>}>
            <Route path='/home/:uid/messages/:recipient' element={<Messages/>}/>
          </Route>
          <Route path='/home/:uid/channels' element={<Channel/>}>
            <Route path='/home/:uid/channels/:channelName' element={<Channel/>}/>
          </Route>
        </Route>
        <Route path="/404" element={<DefaultErrorPage />} />
        <Route path="*" element={<DefaultErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
