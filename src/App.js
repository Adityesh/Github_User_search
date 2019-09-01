import React from 'react';
import './App.css';
import Search from './Components/Search'
import Card from './Components/Card'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      username : 'Adityesh',
      name : '',
      avatar : '',
      followers : '',
      repositories :0,
      location : '',
      notFound : ''
    }
  }

  render(){
    return(
      <div className="body">
      <Search className="search" fetchUser={this.fetchUser.bind(this)}/>
      <Card className="card" data ={this.state}/>
      </div>
    )
  }

  fetchUser=(username)=>{
    let url = `https://api.github.com/users/${username}`
    this.fetchUrl(url)
  }

  fetchUrl(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        username : data.login,
        name : data.name,
        avatar : data.avatar_url,
        followers : data.followers,
        repositories : data.public_repos,
        location : data.location,
        notFound : data.message
        
      })
      
    })
    .catch=(err)=>console.log(err)

  }


componentDidMount(){
  let url = `https://api.github.com/users/${this.state.username}`
  this.fetchUrl(url)
}


  
}

export default App;
