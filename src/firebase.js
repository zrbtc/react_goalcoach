import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBXTYqSOSuaWAHT8narr-p0yJGBnqdfZ1E",
  authDomain: "goalcoach-70710.firebaseapp.com",
  databaseURL: "https://goalcoach-70710.firebaseio.com",
  projectId: "goalcoach-70710",
  storageBucket: "",
  messagingSenderId: "505567216970"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
