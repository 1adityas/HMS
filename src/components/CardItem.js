// import React ,{useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import './Login.css'
// import { Radio,Checkbox, TextField,FormGroup,FormControlLabel } from '@material-ui/core';
// import uImg from '../Icon awesome-user-alt.svg';
// import pImg from '../Icon\ metro-lock.svg';



// const useStyles = makeStyles({
//   root: {
//     boxShadow:"10px 10px 20px #00000029;",
//     // minWidth: 275,
//     // display:"flex",
//     position:"absolute",
//     top:"25%",
//     left:"30%",
//     right:"30%",
//     width:"auto",
//     height:"70%",
//     backgroundColor:"#EEEEEE"
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// export default function CardItem() {
//   const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;
//   console.log(username)
//   return (
//     // console.log(username)
//     <div className="grid-container">
//       <div className="flex-item3">
//     <Card className={classes.root} >
//       <CardContent>
        
//         <Typography variant="h4" component="h1" align='center' style={{color: "#253143",fontWeight:'bold', paddingBottom:"35px",
//         paddingTop:"10px"
//         //,fontFamily:'Poppins Bold'
//         }}>
//           Hospital Login
//         </Typography>
        
        
//         <div className='fieldAlign'>
//           <div>
//             <i className='userImg'>
//             <img src={uImg}  width='25' />
//           <input onChange={event => setUsername(event.target.value)} type="text" style={{'width':"60%", "borderColor":"#6F88A2",'backgroundColor':'#EEEEEE'}} placeholder='Enter Username Here'></input>
          
//           </i>
//           </div>
//           <div>
//             <i className='passImg'>
//             <img src={pImg}  width='25' />

//         <input onChange={event => setPassword(event.target.value)} type="text" style={{'width':"60%", "borderColor":"#6F88A2",'backgroundColor':'#EEEEEE'}} placeholder='Enter Password Here' ></input>
//         </i>
//         </div>
//         <FormGroup>
//           <FormControlLabel 
//           style={{"color":'#6F88A2',"margin-left":'15%' ,'padding-top':'0px',}} 
//           control={<Checkbox color='#6F88A2' icon={< RoundedSquare/>} 
//           checkedIcon={<CheckedFilled />} />} 
//           label="Remember Me" />
//         </FormGroup>

//         <Button variant="contained" style={{'backgroundColor':'#506F90', 'width':"20%",'margin-top':"10%", 'margin-bottom':"3%",'border-radius':"15px", 'color': "white",'textTransform': 'none'}}>Login</Button>
//         <br/>
//         <Button  style={{'color':'#6F88A2','margin-top':"7%",'textTransform': 'none'}}>Not Registered Yet?</Button>
//         <Button  style={{'color':'#6F88A2' ,'margin-top':"7%",'textTransform': 'none'}}>Contact Admin</Button>
//         </div>
        

//       </CardContent>

      
//       {/* <CardActions>
//         <Button size="small" style={{'backgroundColor':'#506F90'}}>Login</Button>
//       </CardActions> */}
//     </Card>
//     </div>
  
//     </div>
//   );
// }
