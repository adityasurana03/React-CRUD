import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = ()=>{
    const[users,setUser] = useState([]);
    useEffect(()=>{
        loadUsers()
    },[]);
    const loadUsers = async () =>{
        const results = await axios.get("http://localhost:3001/users");
        setUser(results.data)
    }
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
      };
    return(
        <div className='container'>
            <div className='py-4'>
                <h1>User</h1>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className="btn btn-primary me-2" to ={`/users/${user.id}`}>View</Link>
                                        <Link className="btn btn-warning me-2" to={`/users/edit/${user.id}`}>Update</Link>
                                        {/* <Link className="btn btn-outline-primary me-2" to="users/edit/">Edit</Link> */}
                                        <Link className="btn btn-danger" to="" onClick={() => deleteUser(user.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home;