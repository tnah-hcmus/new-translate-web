import { firebase, googleAuthProvider, facebookAuthProvider } from '../../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLoginGoogle = () => {
  return () => {
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          .then(function() {
            return firebase.auth().signInWithRedirect(googleAuthProvider);
          })
          .catch(function(error) {
            console.log(error);
          }); 
  };
};

export const startLoginFacebook = () => {
  return () => {
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          .then(function() {
            return firebase.auth().signInWithRedirect(facebookAuthProvider);
          })
          .catch(function(error) {
            console.log(error);
          }); 
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
