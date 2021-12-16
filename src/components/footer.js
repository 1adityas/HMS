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
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      >
    // 
      {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
      <div style={{
                    'color': "#EEEEEE",
                    'text-align': "left",
                    'font': "normal normal normal 18px/27px Poppins",
                    'letter-spacing': "0px",
                    'color': "#EEEEEE",
                    'text-transform': "capitalize",
                    'opacity': 1,}}>
    © 2021 Powered By Kenko Tech</div>
    </BottomNavigation>
    </div>
  );
}
