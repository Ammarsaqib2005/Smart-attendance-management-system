import { auth, db } from "./firebase/firebase"

function App() {
  console.log("Firebase Auth:", auth);
  console.log("Firestore DB:", db);

  return (
    <>
     <div className="App">
      <h1>Smart attendance system</h1>
     </div>
    </>
  )
}

export default App
