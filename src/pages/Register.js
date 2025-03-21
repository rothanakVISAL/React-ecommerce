import React from 'react';
import '../bootstrap/bootstrap.min.css';

const Register = () => {
  return (
    <div className="text-center justify-content-center d-flex p-4">
      <div className="border border-info justify-content-center p-3 mr-2 rounded" style={{width:500}}>
        <h4 className="fw-bold">Create an account</h4>
        <form action=" " method="post" className="d-flex flex-column">
          <input type="text" className="rounded p-2 m-2" placeholder="first name" required />
          <input type="text" className="rounded p-2 m-2" placeholder="last name" required />
          <input type="text" className="rounded p-2 m-2" placeholder="username" required />
          <input type="email" className="rounded p-2 m-2" placeholder="email" required />
          <input type="password" className="rounded p-2 m-2" placeholder="password" required />
          <input type="password" className="rounded p-2 m-2" placeholder="confirm password" required />
          <div className="d-flex justify-content-center p-3">
              <button className="btn btn-info text-center">CREATE ACCOUNT</button>
          </div>
          <span className="text-center fst-6 fst-italic">
            By creating an account, I consent to the processing of my personal
            data in accordance with the privacy policy.
          </span>
        </form>
      </div>
    </div>
  );
};
 
export default Register;
