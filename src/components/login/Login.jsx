import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { Link } from 'react-router-dom';

const Login = () => {
    const [logInSuccess, setLogInSuccess] = useState(false);
    const [errorMessage, setErrorMessage]=useState('');

    const handelLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        setLogInSuccess(false);
        setErrorMessage('');
        

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setLogInSuccess(true);

            })
            .catch((error) => {
                console.log(error.message);
                setErrorMessage(error.message);
            })

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen" onSubmit={handelLogin}>
                <div className="">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-5">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                        </form>
                        <p>New to this sit ? please <Link className='text-green-500' to='/register'>SignUP</Link></p>
                        {
                            logInSuccess && <p className='text-green-500'> Login sucessful</p>
                        }
                        {
                            errorMessage && <p className='text-red-600'>{errorMessage}</p>
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;