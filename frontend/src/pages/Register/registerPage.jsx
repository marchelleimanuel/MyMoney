import { useState } from "react";
import { useNavigate } from "react-router-dom"
import RegisterService from '../../services/Register/registerService'

const Register = () => {
    const navigate = useNavigate();
    const [username , setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');

    const register = async () => {
        
        const response = await RegisterService(username, email, password, confirmPassword)
        
        if(response.response_code === 'SUCCESS') {
            navigate('/login')
        }
    }

    const goToLoginPage = () => {
        navigate('/login')
    }
    
    const changeUsername = e => {
        setUsername(e.target.value)
    }

    const changeEmail = e => {
        setEmail(e.target.value)
    }

    const changePassword = e => {
        setPassword(e.target.value)
    }

    const changeConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }

    return (
        <div className="flex justify-center items-center h-screen">  
            <div>
                <h1 className="text-4xl font-bold">Register</h1>
                <div className="">
                    <p>Username</p>
                    <input type="text" className="border-2 border-black" onChange={changeUsername}/>
                </div>
                <div className="">
                    <p>Email</p>
                    <input type="email" className="border-2 border-black" onChange={changeEmail}/>
                </div>
                <div className="">
                    <p>Password</p>
                    <input type="password" className="border-2 border-black" onChange={changePassword}/>
                </div>
                <div className="">
                    <p>Confirm Password</p>
                    <input type="password" className="border-2 border-black" onChange={changeConfirmPassword}/>
                </div>
                <button className="cursor-pointer border-2 border-black" onClick={register}>Register</button>
                <div>
                    <p className="cursor-pointer" onClick={goToLoginPage}>Already have an account?</p>
                </div>
            </div>
        </div>
    )
}

export default Register;