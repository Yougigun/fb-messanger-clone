import firebase from 'firebase'
import {firebaseConfig} from './firebaseConfig'
// Create your own firebase account and use your project config
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db