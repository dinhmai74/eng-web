import firebase from './firebase'

export const FirebaseWorker = {
  getQuestions: async (question: string, type: string = 'reading') => {
    const link = `ielts_beginner/${type}/questions/${question}/answers`

    const questionRef = await firebase.database().ref(link)
    const snapshot = await questionRef.once('value')
    return snapshot.val()
  },
  getTitleQuestions: async (title: string, type: string = 'reading') => {
    const link = `ielts_beginner/${type}/questions/${title}/titlequestion`

    const titleRef = firebase.database().ref(link)
    const snapshot = await titleRef.once('value')
    return snapshot.val()
  }
}

export default FirebaseWorker
