import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin"
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Customer from "./pages/Customer";



function App() {
  return (
    <BrowserRouter>
    {/* <Signin/> */}
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path="/sign-up" element={<Signup/>} />
      {/* <Route element={<PrivateRoute />}> */}
       <Route path="/dashboard" element={<Dashboard/>} />
       <Route path="/product" element={<Product/>}/>
       <Route path="/customers" element={<Customer/>}/>
      {/* </Route> */}
    </Routes>
    </BrowserRouter>
  ) 
}

export default App
