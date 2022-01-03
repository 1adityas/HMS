import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
        
      vertical: 'top',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    getContentAnchorEl={null}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    
    var link=`./${e.currentTarget.id}`;
    window.open(link, "_blank");
    // setAnchorEl(null);
  };

  return (
    <div>
      <Button
      style={{color:'#506F90',backgroundColor:'#EEEEEE',fontSize:'20px',borderRadius:'10px',height:'50px',width:'120px'}}
      sx={{ boxShadow: '5px 5px 15px #00000029;', 'text-transform': 'none', width: '192px', height: '60px', fontSize: '20px', fontWeight: '500' }} 
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Actions
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        style={{}}
      >
        <MenuItem id='InitialAssessment'  onClick={handleClose} disableRipple style={{backgroundColor:'#E4E4E5',margin:'0px',fontSize:'20px',fontFamily:'poppins'}}>
          
          Initial Assessment
        </MenuItem>
        <MenuItem id='HGT' onClick={handleClose} disableRipple style={{backgroundColor:'#E4E4E5',margin:'0px',fontSize:'20px',fontFamily:'poppins'}}>
          HGT Sheet
        </MenuItem>
        <MenuItem id='' onClick={handleClose} disableRipple style={{backgroundColor:'#E4E4E5',margin:'0px',fontSize:'20px',fontFamily:'poppins'}}>
          Dialysis
        </MenuItem>
        <MenuItem id='' onClick={handleClose} disableRipple style={{backgroundColor:'#E4E4E5',margin:'0px',fontSize:'20px',fontFamily:'poppins'}}>
          Admission Card
        </MenuItem>
        <MenuItem id='Discharge' onClick={handleClose} disableRipple style={{backgroundColor:'#E4E4E5',margin:'0px',fontSize:'20px',fontFamily:'poppins'}}>
          Discharge
        </MenuItem>
        <MenuItem id='Reports' onClick={handleClose} disableRipple style={{backgroundColor:'#E4E4E5',margin:'0px',fontSize:'20px',fontFamily:'poppins'}}>
          Reports
        </MenuItem>
        <MenuItem id='ChangeBed' onClick={handleClose} disableRipple style={{backgroundColor:'#E4E4E5',margin:'0px',fontSize:'20px',fontFamily:'poppins'}}>
          Change Bed
        </MenuItem>
        <MenuItem id='PatientRelativeDetails' onClick={handleClose} disableRipple style={{backgroundColor:'#E4E4E5',margin:'0px',fontSize:'20px',fontFamily:'poppins'}}>
          Edit Details
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
