import { useState } from "react";
import axios from "axios";

const Form = () => {
    const [data, setData] = useState("");
    const [info, getInfo] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:4000/post", { data });

        setData(" ");

        let getRes = await axios.get("http://localhost:4000/get");
        getInfo(getRes.data);

    };

    return (
        <>
            <div className="container mt-5">
                <form>
                    <div className="form-group">
                        <label for="Name"> Name :</label>

                        <input
                            type="name"
                            placeholder="Enter Name"
                            id="Name"
                            onChange={(e) => setData(e.target.value)}

                            value={data}
                        />
                        <br />
                    </div>

                    <div className="form-group">
                        <button
                            type="submit"
                            onClick={submit}
                            className="btn btn-primary btn-sm"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                <h5>Name :{info}</h5>
            </div>

        </>
    );
};
export default Form;
