import './App.css';
import {Header} from "./components/header/header";
import Main from "./components/main/main";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./components/aboutPage/aboutPage";
import {Footer} from "./components/footer/footer";
import PricingPage from "./components/pricingPage/pricingPage";
import ServicesPage from "./components/servicesPage/servicesPage";
import ContactPage from "./components/contactPage/contactPage";
import BlogPage from "./components/blogPage/blogPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/pricing' element={<PricingPage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
      </Routes>
        <Footer/>

    </div>
  );
}

export default App;
