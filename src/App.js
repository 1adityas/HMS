import React,{useState} from 'react';
import reactDom from 'react-dom';
import './App.css';
import Header from './Components/Header/Header';




const App = ()=> {
  // let newSt="#253143";
  const [st,setSt]=useState("#253143");
  const [text,setText]=useState("");

  const Required=()=>{
    // const el = document.querySelector('input[type=text]');
     if (1===1)
     setSt("#6E293B");
     setText("Please Check if your username/password is incorrect");
    // el.classList.remove('input[type=text]');
  }
  // let Style={ borderColor: "red"};
  // Style={ border: {St}}
  // console.log(St)
  
  


  return (
    
    <div id="bg"> 
    <div className="back"></div>
      
    <div className='logo'><img src={require('./logo\ main.png').default}></img> </div>
    
      
      <div className='box'>
    

        <form>
          <h1 id='head1'>Hospital Login</h1>
          <br></br>
          <div id="space">
            <input className="input1" type="text" required placeholder="Enter Username Here" style={{borderColor:st}}></input>
            <br />
            <input className="input2" type="password" required placeholder="Enter Password Here" style={{borderColor:st}}></input>
            <br />
            <label class="container">
            <input type="radio"/>Remember Me <span class="checkmark"></span> </label> {/*check this stuff */}
          </div>
          <br />
          <br />
          <br />
          <div id="logspace">
            <button className="log" onClick={Required}>Log In</button></div> 
          <br />
          <br />
          <h4 id="register">Not Registered Yet? Contact Admin</h4>
          <br />
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
      <div className='nurse'><img src={require('./Nurse.svg').default}></img> </div>

      <p id="warning">{text}</p>

      </div>
  );}
// function Ward(){
//   return (
//     <div className="App">
//       <div>
//         <Header/>
//       </div>
//       <h1>Ward Details</h1>    
//   </div>);
// }


// export default Ward;
export default App;