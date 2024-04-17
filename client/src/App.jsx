import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/_components/globalComponents/Header";
import Footer from "./pages/_components/globalComponents/Footer";
import Donation from "./pages/Donation";
import AboutUs from "./pages/AboutUs";
import Recipient from "./pages/Recipient";
import Inventory from "./pages/Inventory";
import Voluntary from "./pages/Voluntary";
import DonateNow from "./pages/DonateNow";
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
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/volunteering' element={<Voluntary />} />
          <Route path='/donate-now' element={<DonateNow />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
