import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const AddUser = () =>{
    let history = useHistory();
    const [user, setUser] =useState({
        name: "",
        username: "",
        email: "",        
    });
    const {name, username , email} =user
    const onInput = e =>{
        console.log(e.target.value);
        setUser({ ...user,[e.target.name]: e.target.value})
    }
    const onSubmit= async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/users",user);
        history.push("/");

    }
    return(
        <div className="container mt-5">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mt-3">Add User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                    <input className="form-control form-control-lg" type="text" placeholder="Enter your name" name="name" value={name} onChange={e => onInput(e)} required/>
                    </div>
                    <div className="form-group mt-4">
                    <input className="form-control form-control-lg" type="text" placeholder="Enter your username" name="username" value={username} onChange={e => onInput(e)} />
                    </div>
                    <div className="form-group mt-4">
                    <input className="form-control form-control-lg" type="email" placeholder="Enter your Email address" name="email" value={email} onChange={e => onInput(e)} />
                    </div>
                    
                    <button className="btn btn-primary btn-block mt-5">Add User</button>
                </form>
            </div>
        </div>
    )
}
export default AddUser