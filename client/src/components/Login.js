import { flexbox } from '@mui/system'
import React, {useState} from 'react'

function Login({setUser,setIsAuthenticated}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    const [error, setError] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
            password
        }
       
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
          if(res.ok){
            res.json()
            .then(user=>{
              setUser(user)
              setIsAuthenticated(true)
            })
            
          } else {
            res.json()
            .then(json => setError(json.error))
          }
        })
    }
    return ( 
      <> 
          <header>
        <h1>The Bucket List</h1>
        </header>
      <h1 style={{color: 'white', lineHeight : 5, padding: 10 }}>Login</h1>
      <form onSubmit={onSubmit}>
      <label className="form-field">
        Username
 
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label className="form-field">
       Password  
  
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
     
      <input type="submit" value="Login!" />
    </form>
    {error?<div>{error}</div>:null}
      </>
  )
}

export default Login;