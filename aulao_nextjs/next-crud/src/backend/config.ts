import firebase from "firebase";
import 'firebase/firestore'

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID


if (!firebase.apps.length) {

    firebase.initializeApp({
        apiKey,
        authDomain,
        projectId
    })

}

export default firebase