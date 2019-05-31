import firebase from './firebase'

export const FirebaseWorker = {
  getQuestions: async (question: string) => {
    const questionRef = await firebase
      .database()
      .ref(`ielts_beginner/reading/questions/${question}/answers`)
    const snapshot = await questionRef.once('value')
    return snapshot.val()
  },
  getTitleQuestions: async (title: string) => {
    const titleRef = firebase
      .database()
      .ref(`ielts_beginner/reading/questions/${title}/`)
    const snapshot = await titleRef.once('value')
    return snapshot.val()
  }
}

export default FirebaseWorker
