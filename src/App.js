import './App.css'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './forms/Register/Register';
import Login from './forms/Login/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path ="/register" element={<Register/>}/>
                <Route path ="/login" element={<Login/>}/>
                <Route path ="/"element={<Login/>}/>
                {/* <Route path ="*"element={<ErrorPage/>}/> */}
            </Routes>
        </Router>
    );
}

export default App;
