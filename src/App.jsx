import { useState, useRef } from "react"
import Cookies from "universal-cookie"
const cookies = new Cookies()
import Authe from "./component/Authe"
import Chat from './component/chat'
import { signOut } from "firebase/auth"

function App() {
  const [isAuth, setisAuth] =  useState(cookies.get("auth-token"))
  const [room, Setroom] = useState(null)
  const roomInput = useRef(null)

  const signuserOut = async () => {
   await signOut
   cookies.remove("auth-token")
   Setroom(null)
   setisAuth(false)
  }

  if(!isAuth) {
    return (
      <div>
           <Authe setAuth={setisAuth}/>
      </div>
    )
  }else {
    return (
      <>
      <div>{room ? <Chat room = {room}/> : 
          <div className="rooms">
            <label className="enterRoom">Enter Room Name</label>
            <input type="text" ref={roomInput} className="roomInput"/>
            <button onClick={() => Setroom(roomInput.current.value)}>Enter Chat</button> 
          </div>}
      </div>

      <div>
         <button onClick={signuserOut} className="sign-out">Sign out</button>
      </div>
      </>
      )
    }
  }

 


export default App

