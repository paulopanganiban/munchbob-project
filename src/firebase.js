import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFDeuOunz8m-yoPPHT4rQuA6DMuQs_WqE",
  authDomain: "dummy-585b0.firebaseapp.com",
  projectId: "dummy-585b0",
  storageBucket: "dummy-585b0.appspot.com",
  messagingSenderId: "200186799810",
  appId: "1:200186799810:web:148cfd09c513714457fd5b",
  measurementId: "G-6P2QHGZ0N7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const storage = firebase.storage()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const functions = firebase.functions()
export { db, auth, provider, functions, storage }

// register
export const createAccount = (email, password) => { auth.createUserWithEmailAndPassword(email, password) }
export const signIn = (email, password) => { auth.signInWithEmailAndPassword(email, password) }
export const signInWithGoogle = () => { auth.signInWithPopup(provider) }
export const signOut = () => { auth.signOut() }
//
// udemy
//
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const { uid } = userAuth
  // query inside firestore for the doc if it exists
  const userRef = db.doc(`users/${uid}`)
  const snapshot = await userRef.get()

  if(!snapshot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const timestamp = firebase.firestore.FieldValue.serverTimestamp()
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdDate: timestamp,
        ...additionalData,
      })
    } catch (err) {
      console.log(err)
    }
  }
  return userRef
}
//
export const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return
  const { uid } = userAuth
  // query -> set of instructions sa database kung ano need. query nga e
  // query reference -> is yung nireturn ni firestore sa query natin.
  const userRef = db.doc(`users/${uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email, photoUrl } = userAuth;
    const timestamp = firebase.firestore.FieldValue.serverTimestamp()
    try {
      await userRef.set({
        displayName,
        email,
        photoUrl,
        createdDate: timestamp,
        ...additionalData
      })
    } catch (err) {
      console.log(err)
    }
  }
  return userRef;
}


export const addUserToDatabase = (user, additionalData) => {
  const { uid } = user
  const { userRole, address } = additionalData
  if (user) {
    db.collection('users').doc(uid).set({
      address: address,
      userRole: userRole,
    })
  }
}

// add collection
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = db.collection(collectionKey)
  console.log(collectionRef)
  // batch write
  const batch = db.batch()
  // foreach doesn't return a new array
  objectsToAdd.forEach(object => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, object)
  })
 return await batch.commit()
}