import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import './Footer.css'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor:"#253143"
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
      <div className= "bottom-nav">
    <BottomNavigation
    style={{ 
      
      'position':'absolute',
      // 'margin-top':"15px",
      // 'bottom':'0px',
     'height':"70px"}}
      
      showLabels
      className={classes.root} >
    
     

      <div style={{
                    'padding':'15px',
                    'color': "#EEEEEE",
                    'text-align': "center",
                    'height':"30%",
                   
                    'letter-spacing': "0px",
                    'text-transform': "capitalize",
                    'opacity': "1",
                    'height':"15px",

                    'font-family':"Poppins, sans-serif",
                    'font-weight':"100",
                    'font-style':"normal"
                 }}>
                        © 2021 Powered By Kenko Tech</div>
      </BottomNavigation>
      </div>
  );
}