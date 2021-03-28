import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook } from '../actions/auth/auth';
import {Button, Link, Box, Grid, Typography, Avatar, CssBaseline, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import LockOutlined from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      backgroundColor: "black",
      color: "white",
      margin: theme.spacing(3, 0, 2),
    },
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://i.imgur.com/UHhPcyB.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "black",
    },
}));

const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.facebook.com/rvn.page">
          RVN
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const LoginPage = ({ google, facebook }) => {
    const classes = useStyles();
    return (
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
          Log in
        </Typography>        
        <Button
          onClick={google}
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
        <Typography component="h6" variant="h6">
          Login with Google
        </Typography> 
        </Button>
        <Button
          onClick={facebook}
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
        <Typography component="h6" variant="h6">
          Login with Facebook
        </Typography> 
        </Button>
      <Box mt={5}>
          <Copyright />
      </Box>
        </div>
      </Grid>
    </Grid>
    );
}
const mapDispatchToProps = (dispatch) => ({
  google: () => dispatch(startLoginGoogle()),
  facebook: () => dispatch(startLoginFacebook()),
});
export default React.memo(connect(undefined, mapDispatchToProps)(LoginPage));
