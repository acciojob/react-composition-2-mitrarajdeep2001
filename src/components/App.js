
import React, {useState} from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div onClick={() => setShowModal(!showModal)}>
        <button onClick={() => setShowModal(!showModal)}>Show Modal</button>
        <Modal show={showModal} onClose={() => setShowModal(!showModal)}/>
    </div>
  )
}

export default App
