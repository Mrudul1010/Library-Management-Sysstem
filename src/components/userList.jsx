import { useState,useEffect } from "react";
import '../styles/userList.css'
const UserList = () => {
    let[user,setUser] = useState([])
    useEffect(()=>{
        let fetchData = async() =>{
            let response = await fetch('http://localhost:2000/users')
            let data = await response.json()
            setUser(data) //updating
            console.log(data)
          }
          fetchData()
    },[])

    return ( 
        <div className="userList">
            <h1>User List</h1>
            <div className="usersection">
                { user.map(data => (
                    <div className="username">
                        <h2>Name:{data.name}</h2>
                        <h4>Age:{data.age}</h4>
                        <h4>Email:{data.email}</h4>
                        <h4>PhoneNumber:{data.phoneNumber}</h4>              
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default UserList;