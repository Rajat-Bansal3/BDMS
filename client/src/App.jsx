import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/_components/homeComponents/Header";
import Footer from "./pages/_components/homeComponents/Footer";
import Donation from "./pages/Donation";
import AboutUs from "./pages/AboutUs";
import Recipient from "./pages/Recipient";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/donate' element={<Donation />} />
          <Route path='/recipient' element={<Recipient />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
