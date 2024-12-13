import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"

import {Signup} from "./pages/signup"
import {Signin} from "./pages/signin"
import {Dashboard} from "./pages/dashboard"
import {Sendmoney} from "./pages/Sendmoney"
import { Profile } from "./pages/profile"


 function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/send" element={<Sendmoney/>}/>
      <Route path="/profile" element={<Profile/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;