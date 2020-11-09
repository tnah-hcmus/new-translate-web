import { firebase, googleAuthProvider } from '../../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLoginGoogle = () => {
  return () => {
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          .then(function() {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return firebase.auth().signInWithRedirect(googleAuthProvider);
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
