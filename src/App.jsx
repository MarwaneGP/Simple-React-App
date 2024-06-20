import './style/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import UserProfile from './UserProfile';
import AlbumPage from './AlbumPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='/user/:id' element={<UserProfile/>}/>
        <Route path='/album/:id' element={<AlbumPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
