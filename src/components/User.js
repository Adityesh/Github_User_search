import React from 'react'
import UserLoader from './UserLoader';
const User = (props) => {
    return(
        
        <div className="profile" style={{height : 400, width : 800, position : 'relative'}}>
            {props.loading === 1 ? <UserLoader loading={props.loading}/> : null}
            
            {props.loading === 0 ? null : null}
            {props.loading === 2 ? <div style={{display : 'flex', alignItems : 'center', position : 'absolute'}}>
                <img src={props.user.avatar_url} height="200" width="200" style={{borderRadius : '50%',position : 'absolute', top : 100, left : 100}}/>
                <ul style={{position : 'absolute', width:300, height:175, left :330, top :110}}>
                    <li>Name : {props.user.name ? props.user.name : props.user.login}</li>
                    <li>Location : {props.user.location}</li>
                    <li>Bio : {props.user.bio ? props.user.bio : 'No bio available'}</li>
                    <li>Repositories : {props.user.public_repos}</li>
                    <li>Followers : {props.user.followers}</li>
                    <li>Following : {props.user.following}</li>
                </ul>
            </div> : null}
            
        </div>
    )
}


export default User;