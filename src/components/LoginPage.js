import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle } from '../actions/auth/auth';
import {Button, Link, Box, Grid, Typography, Avatar, CssBaseline, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import LockOutlined from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/103606197_162639061967521_6438208494131350443_o.png?_nc_cat=108&ccb=2&_nc_sid=e3f864&_nc_ohc=9yRyaDXGof4AX9AT37v&_nc_ht=scontent.fsgn5-5.fna&oh=efdf0a8c721f8c21210372bcaf6b68ab&oe=5FCD9D0C)',
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
      backgroundColor: theme.palette.secondary.main,
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

const LoginPage = ({ google }) => {
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
          Log In With Google
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
  google: () => dispatch(startLoginGoogle())
});
export default connect(undefined, mapDispatchToProps)(React.memo(LoginPage));
