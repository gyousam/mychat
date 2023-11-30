import React, { useState } from 'react'
import { BrowserRouter as Router, Route, }




import Login from './pages/Login'
import Registera from '/pages/Registera'
import Registerb from './pages/Registerb'

const App = () => {
  const [isLogged, setIsLogged ] = useState(false);
  const [email, setEmail] = useState();
  const [nick, setNick] = useState();


  const waitForAuthChange = () => {
    return new Promise(resolve => {
      const unsub = onAuthStateChanged(auth, (user)=> {
        if (user){
          setIsLogged(true);
          resolve(); 
        }
      });
      return ()=> unsub();
    });
  };






  //인증상태변경
  const handleAuthChange = async()=> {
    try {
      await waitForAuthChanged();
      console.log
    }
  }



  const logout = () => signOut(auth);

  useEffect(()=> {
    handleChange
  })





  return (
    <Router>
      <div className=
    </Router>
  )
}

export default App
