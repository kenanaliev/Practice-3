import { Route, Routes } from "react-router-dom"
import Home from "./layout/Pages/Home"
import "./reset.scss"
import Add from "./layout/Pages/Add"
import Services from "./layout/Pages/Services"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/service" element={<Services />} />
      </Routes>

    </>
  )
}

export default App
