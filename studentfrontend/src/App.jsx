import Navbarmain from "./components/navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Homepage"
import StudentCard from "./components/StudentCard"

function App() {
 

  return (
    <BrowserRouter>
   <Navbarmain />
   <StudentCard />
   <Routes>
     <Route path="/home" element={<HomePage />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
