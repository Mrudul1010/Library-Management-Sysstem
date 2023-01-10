import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css'
const UserLogin = () => {

    let navigate  = useNavigate()
    let handleLogin = () => {
        navigate('/user/')
    }

    return(
        <div className="userlogin">
            <div className="loginCard">
                <h1>Sign In....!</h1>
                <div className="form">
                    <form onSubmit={handleLogin}>
                        <div className="mail">
                            <label>
                                Email
                                <input type="email" required placeholder="Enter Email" />
                                {/* required : it is used to make that field mandatory */}
                            </label>
                        </div>
                        <div className="pass">
                            <label>
                                Password
                                <input type="password" placeholder="Enter Password" />
                            </label>
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default UserLogin;