import '../styles/addUser.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddUser = () => {
    let[name,setName] = useState("")
    let[age,setAge] = useState("")
    let[email,setEmail] = useState("")
    let[phoneNumber,setNumber] = useState("")
    
    let navigate = useNavigate()

    let handleSubmit = (e) =>{
        e.preventDefault() 
        //data to be posted
        let userData = {name,age,email,phoneNumber}
        //posting to server
        fetch(`http://localhost:2000/users`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        alert(`user added successfully`)
        navigate('/admin/user-list')
    }

    return ( 
        <div className='all'>
            <h1>Add User</h1>
            <div className="image">
                <img src="https://st4.depositphotos.com/1003924/22950/i/450/depositphotos_229502188-stock-photo-book-open-old-wisdom-desk.jpg" alt="" />
            </div>
            <div className='forms' onSubmit={handleSubmit}>
             <form action="">
              <div className="name">
                <label htmlFor="">Name:             
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Your Name' />
                </label> 
              </div>
              <div className='age'>
               <label htmlFor="">Age:
               <input value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder='Enter Your Age' />
               </label>
               <label htmlFor="">Email:
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
               </label>
               <label htmlFor="">Phone:
                <input value={phoneNumber} onChange={(e)=>setNumber(e.target.value)} type="tel" minLength='10' maxlength='10' />
               </label>
               <button>Submit</button>
              </div>
             </form>
            </div>
        </div>
     );
}
 
export default AddUser;