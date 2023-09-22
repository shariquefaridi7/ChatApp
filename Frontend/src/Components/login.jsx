import { TextField, Button } from "@mui/material";
import { useState } from "react";

import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [data, setData] = useState("");
    const navigate = useNavigate();
    const submit = () => {

        localStorage.setItem("userName", data);

        navigate('/chatApp');
    }
    return (
        <>
        <div  style={{ paddingTop: "50px",border:"1px  solid black",marginTop:"100px",marginLeft:"500px",marginRight:"500px",paddingBottom:"30px"}}> 
<center>
            <TextField id="outlined-basic" label="Username" variant="outlined" size="small" onChange={(e) => setData(e.target.value)} value={data} /><br /><br />
            <Button variant="contained" size="small" onClick={submit}>Submit</Button>
            </center>
            </div>
        </>
    )
}
export default Login;
