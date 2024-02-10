import React, { useState ,useEffect} from 'react';

import './From.css'

const initialState = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
};

const Form = () => {
    const [formData, setFormData] = useState(initialState);
    const [formError, setFormErrors] = useState({});
    const [registerStatus,setRegisterStatus]=useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateData = (data) => {
        const err = {};
        const { fname, lname, email, phone } = data;
        if (fname.trim() === "") {
            err.fname = "Please enter your first name!";
        }else if (! /^[a-zA-Z]+$/.test(fname)) {
            err.fname = "Please enter a valid Name!";
        }
        if (lname.trim() === "") {
            err.lname = "Please enter your last name!";
        }else if (! /^[a-zA-Z]+$/.test(fname)) {
            err.fname = "Please enter a valid Name!";
        }
        if (email.trim() === "") {
            err.email = "Please enter your email!";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            err.email = "Please enter a valid email address!";
        }
        if (phone.trim() === ""|| !/^\d+$/.test(phone)) {
            err.phone = "Please enter your phone number!";
        } else if (phone.split("").length <10) {
            err.phone = "Please enter a 10-digit phone number!";
        }
        return err;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateData(formData);
        setFormErrors(errors);
        if (Object.keys(errors).length===0){
            setRegisterStatus(true);
        }else{
            setRegisterStatus(false)
        }
    };
    useEffect(() => {
        setTimeout(() => {
            setRegisterStatus(false);
        },2000)
    },[registerStatus])
    return (
        <div className='form-container'>
            {registerStatus && (
                <div className='success-msg-container'>
                    <p className='success-msg'>Registration Successfull.</p>
                </div>
                )}
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                    />
                    {formError.fname &&( <p className='err'>{formError.fname}</p>)}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lname"
                        value={formData.lname}
                        onChange={handleChange}
                    />
                    {formError.lname && (<p className='err'>{formError.lname}</p>)}
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formError.email && (<p className='err'>{formError.email}</p>)}
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {formError.phone && (<p className='err'>{formError.phone}</p>)}
                </div>
                <input type="submit" value="Register" className='regBtn'/>
            </form>
        </div>
    );
};

export default Form;
