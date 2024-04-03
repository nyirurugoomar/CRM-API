import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin"
import Signup from "./pages/Signup";


function App() {
  return (
    <BrowserRouter>
    {/* <Signin/> */}
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path="/sign-up" element={<Signup/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
