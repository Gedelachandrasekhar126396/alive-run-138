import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/Login";
import SignUpPage from "../Pages/SignUp";
import {Routes,Route} from "react-router-dom"

export default function AllRoutes(){
    return<>
    <Routes>
      <Route path = "/" element = {<HomePage/>} ></Route>
      <Route path = "/login" element = {<LoginPage/>} ></Route>
      <Route path = "/signup" element = {<SignUpPage/>} ></Route>
    
     </Routes>
    </>
}