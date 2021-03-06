import React from 'react';
import {Backdrop, CircularProgress} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <div>
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress style = {{color: 'var(--color-accent)'}}/>
      </Backdrop>
    </div>
  );
}
export default React.memo(Loading);