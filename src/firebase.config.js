import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCewl0QzC7xItRqq3P3kGiaEpaqNOQqnV4",
    authDomain: "thefoodiezone-57142.firebaseapp.com",
    databaseURL: "https://thefoodiezone-57142-default-rtdb.firebaseio.com",
    projectId: "thefoodiezone-57142",
    storageBucket: "thefoodiezone-57142.appspot.com",
    messagingSenderId: "495906363230",
    appId: "1:495906363230:web:02261ad9e5b5fddedfa1cf"
  };

  const app=getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore=getFirestore(app);
  const storage =getStorage(app);

  export { app,firestore,storage};

  