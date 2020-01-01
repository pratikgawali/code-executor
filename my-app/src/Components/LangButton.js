import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Menu, MenuItem } from '@material-ui/core'
import DropDownArrow from '@material-ui/icons/ArrowDropDown'

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      marginLeft: -430,
    },
  }));

const options = [
    'Java',
    'Python',
    'C++',
    'C#',
    'Swift',
    'Pearl',
    'C',
    'Javascript',
    'Ruby',
  ];

const ITEM_HEIGHT = 40;

function LangButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();

  
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button
                variant="contained"
                color="default"
                size="small"
                className={classes.button}
                startIcon={<DropDownArrow />}
                onClick={handleClick}
            >
                Select Langauge
        </Button>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  
}

export default LangButton