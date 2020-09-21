import React from 'react'
import UserLoader from './UserLoader';
const User = (props) => {
    return(
        <div>
            <UserLoader loading={props.loading}/>
            {!props.loading ? <div style={{display : 'flex', alignItems : 'center'}}>
                <img src={props.avatar_url} height="200" width="200" style={{borderRadius : '50%'}}/>
                <ul>
                    <li>Name : {props.name}</li>
                    <li>Location : {props.location}</li>
                    <li>Bio : {props.bio}</li>
                    <li>Repositories : {props.public_repos}</li>
                    <li>Followers : {props.followers}</li>
                    <li>Following : {props.following}</li>
                </ul>
            </div> : null}
            
        </div>
    )
}


export default User;