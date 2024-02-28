import "./core/styles/style.scss"
import Landing from "./pages/landing"
import Services from "./pages/services"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/behandlingar' element={<Services category={"behandlingar"} />} />
        <Route path='/samarbeten' element={<Services category={"samarbeten"} />} />
        <Route path='/workshop' element={<Services category={"workshop"} />} />
        {/* <Route path='/om' element={<About />} />
        <Route path='/kontakt' element={<Contact />} /> */}
 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
