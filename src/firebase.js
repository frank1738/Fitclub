import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA1It_UoIoY8OqaqHFV_aObyg1xQd2dCYs',
  authDomain: 'gym-page-f507f.firebaseapp.com',
  projectId: 'gym-page-f507f',
  storageBucket: 'gym-page-f507f.appspot.com',
  messagingSenderId: '963152433769',
  appId: '1:963152433769:web:66eb2bbccbf660505108f8',
};

export const app = firebase.initializeApp(firebaseConfig);
