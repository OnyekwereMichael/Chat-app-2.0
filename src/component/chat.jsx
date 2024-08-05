import React, { useEffect, useState } from 'react'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore'
import { auth, db } from '../Firebase/firebase.config'
function chat({ room }) {
  const [newmessgae, Setnewmessage] = useState('')
  const [messsages, Setmessages] = useState([])

  //  messageref to get collection from firestore 
  const mesasageRef = collection(db, 'messages')

  // listening and  keeping track of the changes and u[dtaing it real time ]
  useEffect(() => {
    const queryMessages = query(mesasageRef, where('room', '==', room), orderBy('createdAt'))
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = []
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      Setmessages(messages)
    })

    return () => unsuscribe()
  }, [])

  const handleForm = async (e) => {
    e.preventDefault()

    // adding the user and other related stuffs to firebase 
    //  checking if no messagee was sent 
    if (newmessgae === '') return;

    //  addaing the doc to the collection 
    await addDoc(mesasageRef, {
      text: newmessgae,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    })



    // reset the input field when submited
    Setnewmessage('')
  }
  return (
    <div className='chat-container'>
      <div>
         <h1 className='chat-h1'>WELCOME TO: {room.toUpperCase()}</h1>
      </div>
      <div>
        {messsages.map((message) => {
        return (
        <div key={message.id} className='chat'>
          <span className='user'>{message.user}:</span>
          <span className='text'>{message.text}</span>
        </div>
        )
        })}
      </div>
      <form onSubmit={handleForm} className='form'>
        <input type="text" value={newmessgae} onChange={(e) => Setnewmessage(e.target.value)}  className='chat-input' placeholder='Message'/>
        <button type='submit' className='send'>Send</button>
      </form>
    </div>
  )
}

export default chat
