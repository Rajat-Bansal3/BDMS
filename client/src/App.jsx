import {Routes , Route , BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/recipient" element={<Recipient />} /> */}
          {/* <Route path="/donation" element={<Donation />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
