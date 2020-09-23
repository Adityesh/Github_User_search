import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/User';
import Repos from './components/Repos';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState([]);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(0);
  const [query, setQuery] = useState('');
  // Loading has 3 states
  // 0 the user hasn't searched for anything
  // 1 the user has searched and the content is loading
  // 2 the search is complete

  const handleSearch = async () => {
    setLoading(1);
    try {
      const result = await Promise.all([getUser(), getRepos()]);
      setUser(result[0]);
      setRepos(result[1]);
      setLoading(2);
    } catch(err) {
      setErr('Error finding user');
      setUser([]);
      setRepos([]);
      setLoading(0);
    }
    
  }

  const getUser = async () => {
    const response = await fetch(`https://api.github.com/users/${query}`);
    return response.json();
  }

  const getRepos = async () => {
    const response = await fetch(`https://api.github.com/users/${query}/repos?sort=created`);
    return response.json();
  }

  useEffect(() => {
      (async () => {
        
        setLoading(1);
        try {
          const response = await Promise.all([fetch('https://api.github.com/users/Adityesh').json(), fetch('https://api.github.com/users/Adityesh/repos?sort=created').json()]);
          console.log(response)
          setUser(response[0]);
          setRepos(response[1]);
          setLoading(2);
        } catch(err) {
          setErr('Error finding user');
          setUser([]);
          setRepos([]);
          setLoading(0);
        }
      })()
  }, [])

  
  return(
    <div style={{display : 'flex', alignItems : 'center', flexDirection : "column", color : 'black'}}>
      <input type="text" onChange={(e) => setQuery(e.target.value)} value={query} placeholder="Enter github username"/>
      <button onClick={handleSearch}>Search</button>
      <span style={{margin : 10, color : 'white'}}>{err.length > 0 ? err : ''}</span>
      <User loading={loading} user={user}/>
      <Repos loading={loading} repos={repos}/>
    </div>
  )
}
export default App;
