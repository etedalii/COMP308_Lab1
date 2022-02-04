import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import './Comment.css';

export default function Comment(props) {

 
  const [comment, setComment] = useState();
  const [email, setEmail] = useState();
 // let loggedEmail = auth.getToken();

  useEffect(() => {
    const loggedInUser = auth.getToken();
   
  //  setEmail(loggedInUser);
   if (loggedInUser!=="") {
        setEmail(loggedInUser);
    }
},[]);
 
  const handleSubmit = e => {
    e.preventDefault();
   // auth.onAuthentication();
    props.history.push('/result');
 
    
  };
  
    return(
       
        <div className="comment-wrapper">
      <h1>Enter Your Comments</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" defaultValue ={email} disabled = {true}/>
        </label>
        <label>
          <p>Comment</p>
          <textarea onChange={e => setComment(e.target.value)} rows={5}/>
        </label>
       
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    )
  }
  