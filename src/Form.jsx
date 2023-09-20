import { useState } from "react";
import axios from 'axios';




const Form=()=>{
    const [data,setData]=useState('');

    const submit=async()=>{
   
       let res= await axios.post("http://localhost:4000/post",{data});
       console.log(res)
       setData(' ');

    }
return(
<>
<form>
    <label for="Name" > Name : </label>
        
     <input type="name" placeholder="Enter Name" id="Name" onChange={(e)=>setData(e.target.value)} value={data}/><br/>
     <input type="button" onClick={submit} value="OK"/>
    

</form>

</>

)

}
export default Form;