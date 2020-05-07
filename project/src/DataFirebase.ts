import firebase from "./firebase"

export const FirebaseWorker = {
  getQuestions: async (level = "ielts_beginner", question: string, type = "reading") => {
    const link = `${level}/${type}/questions/${question}/answers`

    const questionRef = await firebase.database().ref(link)
    const snapshot = await questionRef.once("value")
    console.log("snapshot", snapshot.val())

    return snapshot.val()
  },
  getTitleQuestions: async (level = "ielts_beginner", title, type = "reading") => {
    const link = `${level}/${type}/questions/${title}/titlequestion`

    const titleRef = firebase.database().ref(link)
    const snapshot = await titleRef.once("value")
    return snapshot.val()
  },
  getDescribeQuestion: async (describeQuestion: string, type = "reading") => {
    const link = `ielts_beginner/${type}/questions/${describeQuestion}/describequestion`

    const titleRef = firebase.database().ref(link)
    const snapshot = await titleRef.once("value")
    return snapshot.val()
  },
  getQuestionAudio: async (question: string, type = "reading") => {
    const link = `ielts_beginner/${type}/questions/${question}/titlequestionaudio`

    const questionRef = await firebase.database().ref(link)
    const snapshot = await questionRef.once("value")

    return snapshot.val()
  },
  getListeningAudio: async () => {
    const link = `ielts_advanced/listening/questions/audio`

    const questionRef = await firebase.database().ref(link)
    const snapshot = await questionRef.once("value")

    return snapshot.val()
  },
  writeUserRegister: async (name, email, phone, age, living) => {
    firebase.database().ref("users/").set({
      name,
      email,
      phone,
      age,
      living,
    })
  },
}

export default FirebaseWorker
