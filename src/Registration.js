import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Registration() {

    let navigate = useNavigate();

    const [user, setUser] = useState({
      phoneNo: "",
      country: "",
      name: "",
      address: "",
      city: "",
      emailId: "",
      password: "",
      confirmpassword: "",
      gender: "",
      position: ""
      });
    
      const {phoneNo,country,name,address,city,emailId,password,confirmpassword,gender,position} = user;
    
      const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/addname", user);
        navigate("/Home");
      };

  return (
    <div className='container '>
        <div className='row '>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-12 shadow reg-label formbox-control'>
                <h2 className='text-center m-4 input3-label'>SIGN UP</h2>
                
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3 input-label">
              <label htmlFor="phoneNo" className="form-label" >
                Phone Number
              </label>
              <input
                type={"number"}
                className="form-control form-boxcontrol"
                style={{width:"400px"}}
                placeholder="Enter Phone Number"
                name="phoneNo"
                value={phoneNo}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3 input-label">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type={"text"}
                className="form-control form-boxcontrol"
                style={{width:"400px"}}
                placeholder="Enter Your Country"
                name="country"
                value={country}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3 input-label">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control form-boxcontrol"
                style={{width:"400px"}}
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3 input-label">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control form-boxcontrol"
                style={{width:"400px"}}
                placeholder="Enter Your Address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3 input-label">
              <label htmlFor="city" className="form-label">
              City
              </label>
              <input
                type={"text"}
                className="form-control form-boxcontrol"
                style={{width:"400px"}}
                placeholder="Enter Your City"
                name="city"
                value={city}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3 input-label">
              <label htmlFor="emailId" className="form-label">
              EmailId
              </label>
              <input
                type={"text"}
                className="form-control form-boxcontrol"
                style={{width:"400px"}}
                placeholder="Enter Your Email Id"
                name="emailId"
                value={emailId}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3 input-label">
              <label htmlFor="password" className="form-label">
              Password
              </label>
              <input
                type={"password"}
                className="form-control form-boxcontrol"
                style={{width:"400px"}}
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3 input-label">
              <label htmlFor="confirmpassword" className="form-label">
              Confirmpassword
              </label>
              <input
                type={"password"}
                className="form-control form-boxcontrol"
                style={{width:"400px"}}
                placeholder="Enter Your password again"
                name="confirmpassword"
                value={confirmpassword}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3 input-label">
              <label htmlFor="gender" className="form-label">
              Gender
              </label>
              <input
                type={"text"}
                className="form-control form-boxcontrol"
                style={{width:"400px"}}
                placeholder="Enter Your Gender"
                name="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3 input-label">
              <label htmlFor="position" className="form-label" >
              Position
              </label>
              <input
                type={"text"}
                className="form-control form-boxcontrol"
                style={{width:"400px"}}
                placeholder="Enter the Position"
                name="position"
                value={position}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <button type='submit' className='btn btn-success'>
                    Register
                </button>
                <Link to={"/"} className='btn btn-danger mx-2'>
                    Cancel
                </Link>  
               
                </form>
            </div>  
        </div>
    </div>  
  )
}