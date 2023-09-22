import { Typography, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from 'axios';



const Form = () => {

    const [data, setData] = useState("");
    const [info, setInfo] = useState("");

    const submit = async () => {

        const resp = localStorage.getItem("userName");

        const obj = {
            resp, data
        }

        let info = await axios.post("http://localhost:4000/post", { obj });
        console.log(info);
        setData("");
        const res = await axios.get("http://localhost:4000/get");
        console.log(res.data);
        setInfo(res.data);

    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:4000/get");
            console.log(res.data);
            setInfo(res.data);
        }
        fetchData();
    }, [])
    return (
        <>
        <div  style={{ paddingTop: "50px",border:"1px  solid black",marginTop:"100px",marginLeft:"500px",marginRight:"500px",paddingBottom:"30px"}}> 
<center>
            <Typography>{info}</Typography><br/>
            <TextField id="outlined-basic" label="Message" variant="outlined" size="small" onChange={(e) => setData(e.target.value)} value={data} /><br /><br />
            <Button variant="contained" size="small" onClick={submit}>Send</Button>
            </center>
            </div>
        </>
    )
}
export default Form;


