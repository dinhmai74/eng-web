import * as firebase from 'firebase'
// initialize database

const config = {
  apiKey: 'AIzaSyDbW-1VfgmM_MAjC7vbJjHzenSfxu_3COw',
  authDomain: 'eng-web-d63a3.firebaseapp.com',
  databaseURL: 'https://eng-web-d63a3.firebaseio.com',
  projectId: 'eng-web-d63a3',
  storageBucket: 'eng-web-d63a3.appspot.com',
  messagingSenderId: '417559444640',
  appId: '1:417559444640:web:80772aba5bcf54e1'
}

firebase.initializeApp(config)
export default firebase
