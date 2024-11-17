import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const trems =event.target.trems.checked;
        console.log(email, password, trems);

        // reset previous error
        setErrorMessage('');

        setSuccess(false);

        if (!trems){
            setErrorMessage("Please accept our trems and conditions");
            return;
        }


        if (password.length < 6) {
            setErrorMessage("Password shoud be at least 6 characters");
            return;
        }


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('At least one upper character, lower character, special character and also number');
            return;
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess(true);
            })
            .catch((error) => {
                console.log(error.message);
                setErrorMessage(error.message);
                setSuccess(false);
            })

    }
    return (
        <div className='max-w-lg m-auto'>
            <h1>Register now </h1>
            <form onSubmit={handleRegister}>
                <label className="input input-bordered flex items-center gap-2 my-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="email" name='email' className="grow" placeholder="Email" required />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type={showPassword ? 'text' : 'password'} name='password' className="grow" placeholder='Password' />
                    <button onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                        }
                    </button>
                </label>
                <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                    <input type="checkbox" defaultChecked className="checkbox" name='trems' />
                        <span className="label-text">Remember me</span>
                        
                    </label>
                </div>
                <button className="btn  btn-accent my-8 w-full">Register</button>
            </form>
            <p>Already have an account? please <Link to="/login" className='text-green-400' >Login</Link></p>            

            {
                errorMessage && <p>{errorMessage}</p>
            }
            {
                success && <p className='text-green-500'>sign up is successfully</p>
            }
        </div>
    );
};

export default Register;