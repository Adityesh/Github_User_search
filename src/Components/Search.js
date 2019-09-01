import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : ''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.fetchUser(this.state.username)
        this.setState({
            username : ''
        })

    }

    handleChange(e){
        this.setState({
            username : e.target.value
        })
    }
    render(){
        return(
            <div>
                <h3>Search for any Github User</h3>
                <form onSubmit = {this.handleSubmit.bind(this)}>
                    <input type="text" onChange = {this.handleChange.bind(this)} placeholder="Enter a username" required/>
                    <input type="submit" value="Search"/>
                </form>
    
            </div>
        )
    }

   
}

export default Search;