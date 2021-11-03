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
          <br></br>
          <lable for="email"><b></b></lable>
          <input type="text" placeholder='Enter Username Here' name ="email" required></input>
          <label for="psw"><b></b></label>
          <br></br>
          <input type="password" placeholder="Enter Password Here" name="psw" required></input>
          <br></br>
          <input type="checkbox" value="lsRememberMe" id="rememberMe" text-align="left"/> <label for="rememberMe">Remember me</label>
          <br></br>
          <br></br>
          <button type="submit" class="btn">Login</button>
          <h5>Not Registered Yet?Contact Admin</h5>
        </form>
      </div>
    </div>
  );
}
export default App;

// git remote add origin2 https://github.com/1adityas/HMS.git
// git branch -M main
// git push -u origin2 main