const firebaseConfig = {
    apiKey: "AIzaSyBdEoLrkx2fp6EE8sWRX0UIms0L_wemQ8Q",
    authDomain: "object-final-ci70.firebaseapp.com",
    projectId: "object-final-ci70",
    storageBucket: "object-final-ci70.appspot.com",
    messagingSenderId: "662686129553",
    appId: "1:662686129553:web:f3ab77b0f0752f43e94e30",
    measurementId: "G-YQ71GTHHTJ"
};

    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore()

    export default db