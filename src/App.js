import React from 'react';
import './App.css';

function App() {
  return (
    <div  className="back">
      <div className='logo'></div>
      
      <div className='nurse'></div>
      <div className='box'>
        <form>
        <h1 className='head1'>Hospital Login</h1>
        <input className="input1" type="text" required placeholder="Enter Username Here"></input>
          <br/>
          <input className="input" type="password" required placeholder="Enter Password Here" ></input>
          <br/>
          <label class="container">
          <input type="radio"/>Remember Me <span class="checkmark"></span> </label>
          <br/>
          <br/>
          <br/>
          <button className="log" onsubmit="required()">Log In</button>     
          <br/>
          <br/>
          <h4 id="register">Not Registered Yet? Contact Admin</h4> 
          <br/>
          {/* <h1 className='head1'>Hospital Login</h1>
          <br></br>
          <lable for="email"><b></b></lable>
          <input type="text" id="user" placeholder='Enter Username Here' name ="email" required></input>
          <label for="psw"><b></b></label>
          <br></br>
          <input type="password" id="pass" placeholder="Enter Password Here" name="psw" required></input>
          <br></br>
          <input type="checkbox" value="lsRememberMe" id="rememberMe" text-align="left"/> <label for="rememberMe">Remember me</label>
          <br></br>
          <br></br>
          <button type="submit" class="btn">Login</button>
          <h5>Not Registered Yet?Contact Admin</h5> */}
        </form>
      </div>
    </div>
  );
}
export default App;