import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import English from './English';
import Hindi from './Hindi';
import Konkani from './Konkani'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       postion: 'absolute',
//       color: 'black'

//     },
//   },
// }));
export default function SimpleMenu01() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Languages
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><English/></MenuItem>
        <MenuItem onClick={handleClose}><Hindi/></MenuItem>
        <MenuItem onClick={handleClose}><Konkani/></MenuItem>
      </Menu>
    </div>
  );
}