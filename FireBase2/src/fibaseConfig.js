import firebase from 'react-native-firebase';
const config = {
    apiKey: "AIzaSyAocP1XVAXvpCT1RrhgQVpuAG-I-h7nMLw",
    authDomain: "tlcn-a8f24.firebaseapp.com",
    databaseURL: "https://tlcn-a8f24.firebaseio.com",
    projectId: "tlcn-a8f24",
    storageBucket: "tlcn-a8f24.appspot.com",
    messagingSenderId: "811063616182"
};
export const firebaseApp = firebase.initializeApp(config);
