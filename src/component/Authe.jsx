import Cookies from "universal-cookie"
import { auth, provider } from "../Firebase/firebase.config"
import { signInWithPopup } from "firebase/auth"

const cookies = new Cookies()

function Authe({setAuth}) {
  const signinwithGoggle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      cookies.set('auth-token', result.user.refreshToken)
      console.log(result);
      setAuth(true)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="sign-in">
      <p>Sign in with Google to continue</p>
      <button onClick={signinwithGoggle} className="sign-in-Button">Sign in with Google run</button>
    </div>
  )
}

export default Authe
