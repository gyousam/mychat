import React from 'react'
import '../asset/css/login.css'
import logo from '../asset/images/logo.svg'
import InputType from '../components/InputType'

const Login = () => {
  const [useremail, setUseremail] = React.useState();
  const [userpass, setUserpass] = React.useState();
  const nav = useNavigate();
  const onPress = async (e) => {
    e.preventDefault();
    try{
      const res = await signInWithEmailAndPassword(auth, useremail)
    }
  }

  return (
    <div className="loginContainer">
        <div className= "logo" style={{backgroundImage:`url(${logo})`}}></div>
        <h1 className="text-center">my chat login</h1>
        <form className="loginForm">

        </form>
        <Link to="/"><img src={googleLogin} alt="구글로그인" className="google login"></img></Link>
    </div>
  )
}

export default Login