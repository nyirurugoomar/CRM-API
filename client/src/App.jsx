import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin"
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";


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
      {/* </Route> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
