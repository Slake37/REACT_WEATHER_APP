import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home';
import Search from './pages/Search'

function App() {

  const [location, setLocation] = useState('')
  const [text, setText] = useState('')

  const navigate = useNavigate()

  const handleChange = (e)=>{
    setText(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setLocation(text)
    navigate('/home')
    
  }

  return (
    <div>
       
          <Routes>
            <Route path='/' element={<Search handleSubmit={handleSubmit} handleChange={handleChange} />}/>
            <Route path='/home' element={<Home location={location}/>}  />
          </Routes>
       
    </div>
  );
}

export default App;
