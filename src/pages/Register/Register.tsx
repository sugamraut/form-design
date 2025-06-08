import React from 'react'
import "./Register.css"
import side from '../log in/side.png'
import top from "../log in/top.png"
import nepal from "../log in/nepal.webp"

function Register() {
  return (
    <>
     <div className='Register-continer'>
        <div className='Register-box'>
            <div className='image-section'>
                <img src={side}  style={{borderRadius:"20px"}} alt=''/>
            </div>
            {/* right side section */}
            <div className='form-sec'>
                <form className='Register-form'>
                    <div className='logo-cont'>
                        <img src={top} alt="" style={{display:"flex"}} className='form-log' />
                    </div>
                    <h2 style={{display:'flex'}}> <span className='highlig'>Merchant</span> Registration</h2>
                    <p>Enjoy all the feature that make it easy  for you to manage your finances</p>

                    <label htmlFor="phone"style={{ color: 'black',display:"flex" }}>Phone Number <span className="required">*</span></label>
            <div className="input-with-prefix">
                <img src={nepal} alt="" className='flag-icon' />
              <span className="prefix">+977</span>
             
              <input type="tel" id="phone" placeholder="(000) 000-0000" />
            </div>
                    <label htmlFor='password' style={{color:"black",display:"flex"}}>password</label>
                    <input type="password" name="" id="password" placeholder='enter the password there'/>
                    <label htmlFor='confirm-password' style={{color:"black",display:"flex"}}>Confirm Password</label>
                    <input type='password' id='confirm-password' placeholder='enater the confirm password'/> 
                    <div className="form-extras">
              <label><input type="checkbox" style={{ color: 'black' }}/> Remember me</label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">Register  into your account</button>
                </form>

            </div>

        </div>

     </div>
      
    </>
  )
}

export default Register
