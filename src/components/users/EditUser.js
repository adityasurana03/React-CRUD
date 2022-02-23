import React, {useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
const EditUser = () =>{
  let history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    
  });
  const { name, username, email } = user;
  const onInput = e => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };
    return(
        <div className="container mt-5">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mt-3">Edit User</h2>
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
                    
                    <button className="btn btn-primary btn-block mt-5">Update User</button>
                </form>
            </div>
        </div>
    );
};
export default EditUser;

