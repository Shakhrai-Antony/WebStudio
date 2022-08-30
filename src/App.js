
import './App.css';
import {Header} from "./components/header/header";
import Main from "./components/main/main";

import {Route, Routes} from "react-router-dom";
import AboutSection from "./components/about/about";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Main/>}/>
      </Routes>

    </div>
  );
}

export default App;
