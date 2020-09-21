import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/User';
import Repos from './components/Repos';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  return(
    <div>
      <User loading={loading}/>
      <Repos loading={loading}/>
    </div>
  )
}
export default App;
