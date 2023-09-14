import React from 'react'
import "./login.css"


import {useAuth0} from "@auth0/auth0-react"
const Buttons = () => {
  const { loginWithRedirect ,logout,isAuthenticated} = useAuth0();
  return ( 
    isAuthenticated ?(<li>
      <button className="button2" onClick={() => logout({ returnTo: window.location.origin })}>
      <span></span>
    LOG OUT
  </button>
  </li>)
    
        
        :(<li>
          <button class="button2" onClick={() => loginWithRedirect()}>
              <span></span>
               LOG IN
             </button> 
             </li>)
   
  )
} 

export default Buttons