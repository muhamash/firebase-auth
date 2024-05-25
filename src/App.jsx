import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/Register'
import Reset from './components/Reset'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route path="/home" element={ <Home /> } />
            <Route path="/" element={ <Home /> } exact/>
          </Route>
          <Route path="/login" element={ <Login /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/register" element={ <Register/> } />
          <Route path="/reset" element={ <Reset/> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
