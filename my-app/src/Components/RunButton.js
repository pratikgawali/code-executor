import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#40AF19',
    marginRight: -490
  },
}));

function RunButton() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        startIcon={<SettingsIcon />}
        className={classes.button}
      >
        Run Code
      </Button>
    </div>
  );
}


export default RunButton;

