import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const {registerUser} = useContext(AuthContext);
    const [error, setError]= useState(null);
    const handleRegister =(e)=>{
        setError('')
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        registerUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        })
    }
    return (
            <form onSubmit={handleRegister} className='p-4 text-center' >
            <h1 className='text-3xl font-semibold mb-5'>Please Register</h1>
            <p className='text-xl'>Your Name:</p>
            <input type="text" placeholder="Your Name" name="name" className="input input-bordered input-info w-full max-w-xs mb-4" required/>
            <p className='text-xl'>Photo URL:</p>
            <input type="text" placeholder="Image URL" name="photo" className="input input-bordered input-info w-full max-w-xs mb-4" required/>
            <p className='text-xl'>Your Email:</p>
            <input type="email" placeholder="Enter email" name="email" className="input input-bordered input-info w-full max-w-xs mb-4" required/>
            <p className='text-xl'>Password:</p>
            <input type="password" placeholder="Enter password" name="password" className="input input-bordered input-info w-full max-w-xs mb-4" required/>
            <br />
            <p>If you already sign out!!! go <Link to="/login" className="btn btn-active btn-link pl-0">Login</Link></p>
            <br />
            <p>{error}</p>
            <br />
            <input className='bg-sky-400 px-12 py-3 rounded font-bold text-white' type="submit" name="login" value="Register" id="" />
            </form>
        
    );
};

export default Register;