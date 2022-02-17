import * as _noti from "../common/notify.js"

const config = {
  url: "http://127.0.0.1:5501/index.html",

  handleCodeInApp: true,
};

const createNewAccout = (email, password, fullname, phone) => {
  console.log(email, password)
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
            alert('Đăng kí thành công')
            // Signed in
      let user = userCredential.user;
     
      return user.sendEmailVerification(config);
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode, errorMessage);
      _noti.error(errorCode, errorMessage);
      // ..
    });
};

const loginWithEmailPass = async (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in

      let user = userCredential.user;
      console.log(user.displayName, user.phoneNumber)
      localStorage.setItem('emailLogined', user.email)
      localStorage.setItem('uid', user.uid)
      
      _noti.success('Sucess','Login succesfully')
      return user
      // ...
    })
    .then(()=>{
      window.location = 'http://127.0.0.1:5501/index.html'

    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      _noti.error(errorCode, errorMessage);

    });

  const userCredential = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)

  let user = userCredential.user;
  localStorage.setItem('emailLogined', user.email)
  localStorage.setItem('uid', user.uid)
  return user
}
const getCurrentUser = () => {
  // return  firebase.auth().currentUser;
  const user = firebase.auth().currentUser;

  return user
};

export { createNewAccout, loginWithEmailPass,  getCurrentUser}