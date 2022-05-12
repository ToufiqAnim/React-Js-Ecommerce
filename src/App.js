
import './App.css';
import HomePage from './Pages/HomePage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Shop from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignIn from './Components/SignIn/SignIn';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/login" element={<SignIn/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
