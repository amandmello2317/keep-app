import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import SideBar from './Components/SideBar/SideBar';
import Home from './Components/Home.js/Home';
import { useState } from 'react';
import Bin from './Components/Bin/Bin';
import Archive from './Components/Archive/Archive';


function App() {

  const [openSide, setOpenSide] = useState(false)
  
  const openSideBar = () => {
    if (openSide) {
      setOpenSide(false)
    } else {
      setOpenSide(true)
    }
    console.log(openSide);
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar 
          setOpenSide={setOpenSide}
          openSide={openSide}
          openSideBar={openSideBar}
        />
        <div style={{ display: 'flex'}}>
          {openSide && <SideBar />}
          
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Routes>
            <Route path='/bin' element={<Bin />} />
          </Routes>
          <Routes>
            <Route path='/archive' element={<Archive />} />
          </Routes>
        </div>


      </BrowserRouter>


    </div>
  );
}

export default App;
