import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Register from './forms/Register/Register'
import Login from './forms/Login/Login'
import DefaultErrorPage from './components/Errors/DefaultErrorPage'
import Home from './Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path='/home/:uid' element={<Home/>}>
                    <Route path=':uid/messages' element={}/>
                </Route> */}
        <Route path="/404" element={<DefaultErrorPage />} />
        <Route path="*" element={<DefaultErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
