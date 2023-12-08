import './App.css'
import ProjectPage from './Pages/ProjectPage'
import HomePage from './Pages/HomePage'
import UserInfoPage from './pages/UserInfoPage'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/ProjectPage" element={<ProjectPage />}></Route>
          <Route path="/UserInfoPage" element={<UserInfoPage />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        
        </Routes>
      </Router>
    </>
  )
}

export default App