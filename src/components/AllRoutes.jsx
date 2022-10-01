import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/Login";
import SignUpPage from "../Pages/SignUp";
import {Routes,Route} from "react-router-dom";
import DemoPage from "../Pages/Demo";

export default function AllRoutes(){
    return<>
    <Routes>
      <Route path = "/" element = {<HomePage/>} ></Route>
      <Route path = "/login" element = {<LoginPage/>} ></Route>
      <Route path = "/signup" element = {<SignUpPage/>} ></Route>
     <Route path="/demo" element= {<DemoPage/>} >  </Route>
     </Routes>
    </>
}