import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Log = () => {
    const notify = (data) => toast(data);
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const submitHandler = (e) => {

        e.preventDefault();
        if(!name || !password||!email)
        {
           return  notify("Name,Email,Password Can't be blank!!");
           
        }
        else
        {
            navigate("/category");
        }
      }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-light fs-5">QUIZ-TRIVIA</h5>
                                <form onSubmit={submitHandler}>
                                <div className="form-floating mb-3">
                                        <input  type="text"onChange={(e)=>setName(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Enter Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input  type="email"onChange={(e)=>setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password"onChange={(e)=>setPassword(e.target.value)}  className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Password</label>
                                    </div>

                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                        <label className="form-check-label" for="rememberPasswordCheck">
                                            Remember password
                                        </label>
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Next</button>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Log