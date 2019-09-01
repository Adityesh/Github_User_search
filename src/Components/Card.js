import React from 'react';


class Card extends React.Component {
    

    render() {
        if(this.props.data.message == "Not Found"){
            console.log(this.props.data.message)
            return(
                <div><h3>User Not Found</h3></div>
            );
        }
        else{
            
            return (
                <div>
                    <br/>
                    <img src={this.props.data.avatar} className="img"/><br/><br/>
                    <label>Name:{this.props.data.name}</label><br/><br/>
                    <label>Location:{this.props.data.location}</label><br/><br/>
                    <label>Repositories:{this.props.data.repositories}</label><br/><br/>
                    <label>Followers:{this.props.data.followers}</label><br/><br/>
                </div>
            );
        }

        
    }
}

export default Card;