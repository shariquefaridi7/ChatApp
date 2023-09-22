import { useNavigate } from "react-router-dom";
import {  Button } from "@mui/material";
const Home =()=>{
const nagivate=useNavigate();

const submit=()=>{
    nagivate("/login");
}
  return (
    <>
    <center>
        <h1>This is Home Page</h1>
        <p>For chating Please First Login</p>
        <Button variant="contained" size="small" onClick={submit}>Login</Button>
    </center>
    </>
  )

}
export default Home;