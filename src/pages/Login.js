import React from 'react';
import '../bootstrap/bootstrap.min.css';


function Login(){
  return (
          <div className="text-center justify-content-center d-flex p-5 mr-2">
            <div className="border border-info justify-content-center p-5 mr-2 rounded" style={{width:400, height:420}}>
              <h4 className="fw-bold">Login account</h4>
              <form action=" " method="post" className="d-flex flex-column py-4">
                <input type="text" className="rounded p-2 mb-3" placeholder="username or email" required />
                <input type="password" className="rounded p-2" placeholder="password" required />
                <div className="d-flex justify-content-center p-4">
                    <button type="submit" className="btn btn-info text-center" style={{width:130}}>Login</button>
                </div>
                <span className="text-center fst-6 fst-italic">
                  I consent to the processing of my personal data in accordance with the privacy policy.
                </span>
              </form>
            </div>
          </div>
  );
}

export default Login;
