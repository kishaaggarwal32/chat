import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBe3nx1UBha3eUEs-L3AwQVpZUHDBi3rNo',
  authDomain: 'chat-web-app-8e6ad.firebaseapp.com',
  projectId: 'chat-web-app-8e6ad',
  storageBucket: 'chat-web-app-8e6ad.appspot.com',
  messagingSenderId: '528468501027',
  appId: '1:528468501027:web:43e13f5b6191fad3058796',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
