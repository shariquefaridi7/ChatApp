import Login from "./Components/login";
import { Routes,Route } from "react-router-dom";
import Form from "./Components/form";
import Home from "./Components/Home";

const  App=()=>{

  return(
    <>
  
    <Routes>
     <Route path="/" element={<Home/>}/>
    <Route path="/chatApp" element={<Form/>} />
    <Route path="/login" element={<Login/>}/>

    </Routes>

    </>
  )


}

export default App;
