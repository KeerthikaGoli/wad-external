import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Register.css'; // Your CSS file

function Register() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        // Store form data in localStorage (or use a backend API to store in database)
        localStorage.setItem('userData', JSON.stringify(data));
        alert('Registration successful! Please login.');
        reset(); // Clear the form after submission (optional)
    };

    return (
        <div className="signupmain w-70 mx-auto">
            <h1>Register</h1>
            <form className="mx-auto p-4 pt-3 bg-light formmain rounded" onSubmit={handleSubmit(onSubmit)}>
                <div className="facid mb-4">
                    <input type="text" id="name" className="form-control w-50 mx-auto m-3" placeholder="Name" {...register("name", { required: true, minLength: 4, maxLength: 10 })} />
                    {errors.name && <span className="error">Name is required (4-10 characters)</span>}
                </div>
                <div className="uname mb-2">
                    <input type="text" id="username" className="form-control w-50 mx-auto m-3" placeholder="Username" {...register("username", { required: true, minLength: 4, maxLength: 20 })} />
                    {errors.username && <span className="error">Username is required (4-20 characters)</span>}
                </div>
                <div className="password mb-2">
                    <div className="position-relative d-flex mx-auto w-50 pass-wrapper">
                        <input type='password' id="password" className="form-control w-100" placeholder="Password" {...register("password", { required: true, minLength: 8 })} />
                        {errors.password && <span className="error">Password is required (min. 8 characters)</span>}
                    </div>
                </div>
                <div className="password mb-2">
                    <div className="position-relative d-flex mx-auto w-50 pass-wrapper">
                        <input type='password' id="cpassword" className="form-control w-100" placeholder="Confirm Password" {...register("cpassword", { required: true, minLength: 8 })} />
                        {errors.cpassword && <span className="error">Please confirm password</span>}
                    </div>
                </div>
                <div className="email mb-2">
                    <input type="email" id="email" className="form-control w-50 mx-auto m-3" placeholder="Email" {...register("email", { required: true })} />
                    {errors.email && <span className="error">Email is required</span>}
                </div>
                <div className="Form-group mb-2">
                    <input type="number" className="form-control mx-auto w-50 m-3" id="phonenumber" placeholder="Phone number" {...register('phonenumber', { required: true, minLength: 10, maxLength: 10 })} />
                    {errors.phonenumber && <span className="error">Please enter a valid phone number (10 digits)</span>}
                </div>
                <div className="email mb-2">
                    <input type="text" id="zipcode" className="form-control w-50 mx-auto m-3" placeholder="Zipcode" {...register("zipcode", { required: true })} />
                    {errors.zipcode && <span className="error">Zipcode is required</span>}
                </div>
                <div className="email mb-2">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" {...register("gender", { required: true })}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender && <span className="error">Please select your gender</span>}
                </div>
                <div className="email mb-2">
                    <label htmlFor="preffered">Preferred Products</label>
                    <select id="preferred" {...register("preferred", { required: true })}>
                        <option value="technical">Technical</option>
                        <option value="non-technical">Non-Technical</option>
                    </select>
                    {errors.preferred && <span className="error">Please select preferred products</span>}
                </div>
                <div className="Form-group mb-2">
                    <input type="text" className="form-control mx-auto w-50 m-3" id="occupation" placeholder="Occupation" {...register('occupation', { required: true })} />
                    {errors.occupation && <span className="error">Occupation is required</span>}
                </div>
                <div className="Form-group mb-2">
                    <input type="text" className="form-control mx-auto w-50 m-3" id="state" placeholder="State" {...register('state', { required: true })} />
                    {errors.state && <span className="error">State is required</span>}
                </div>
                <button className="btn button-reg mx-auto d-block">Register</button>
            </form>
            <p className="lead text-center mt-2">Already Registered?
                <Link to="/login" className="fs-4 ps-3">Login</Link>
                here
            </p>
        </div>
    );
}

export default Register;
