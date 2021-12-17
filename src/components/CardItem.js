import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import { Checkbox, TextField,FormGroup,FormControlLabel } from '@material-ui/core';
import user from '../Icon awesome-user-alt.svg';


const useStyles = makeStyles({
  root: {
    boxShadow:"10px 10px 20px #00000029;",
    // minWidth: 275,
    // display:"flex",
    position:"absolute",
    top:"25%",
    left:"30%",
    right:"30%",
    width:"auto",
    height:"60%",
    backgroundColor:"#EEEEEE"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardItem() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="grid-container">
      <div className="flex-item3">
    <Card className={classes.root} >
      <CardContent>
        
        <Typography variant="h4" component="h1" align='center' style={{color: "#253143",fontWeight:'bold', paddingBottom:"35px",
        paddingTop:"10px"
        //,fontFamily:'Poppins Bold'
        }}>
          Hospital Login
        </Typography>
        
        
        <div className='fieldAlign'>
        <input type="text" style={{'width':"60%", "borderColor":"#6F88A2"}} placeholder='Enter Username Here'></input>
        <input type="text" style={{'width':"60%", "borderColor":"#6F88A2"}} placeholder='Enter Password Here'></input>
        
        <FormGroup>
          <FormControlLabel style={{"color":'#6F88A2',"margin-left":'15%' ,'padding-top':'0px',}} control={<Checkbox defaultChecked />} label="Remember Me" />
        </FormGroup>

        <Button variant="contained" style={{'backgroundColor':'#506F90', width:"20%"}}>Login</Button>
        </div>

        <Typography align='center' style={{'color':'#6F88A2', paddingTop:"20px"}}>Not Registered Yet?</Typography>
        <Typography align='center' style={{'color':'#6F88A2'}}>Contact Admin</Typography>


      </CardContent>

      
      {/* <CardActions>
        <Button size="small" style={{'backgroundColor':'#506F90'}}>Login</Button>
      </CardActions> */}
    </Card>
    </div>
    </div>
  );
}
