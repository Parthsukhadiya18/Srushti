import './App.css';
// import RegistationForm from './Component/RegistationForm';
// import Login from './Component/Login';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import RegistationForm from './Component/RegistationForm';
import Login from './Component/Login';
import Product from './Component/Product';
import AddressForm from './Component/AddressForm';
import Payment from './Component/Payment';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/registar' element={<RegistationForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/payment' element={<Payment />} />
          <Route path="/address" element={<AddressForm onSubmit={(address) => console.log(address)} />} />
        </Routes>
      </BrowserRouter>
      {/* <RegistationForm/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
