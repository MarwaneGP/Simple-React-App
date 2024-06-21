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
        <Route path='/user/:id' element={<UserProfile/>}/>{/* we add a filler for the user ID so we can use it later */}
        <Route path='/album/:id' element={<AlbumPage/>}/>{/* same here */}
      </Routes>
    </Router>
  )
}

export default App
