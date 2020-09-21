import React from 'react'
import RepoLoader from './RepoLoader';
const Repos = (props) => {
    return (
        <div>
            <RepoLoader loading={props.loading} />
            {props.repos.map((item, index) => {
                return (
                    <div>
                        <ul>
                            <li>{props.name}</li>
                            <li>{props.description}</li>
                            <li>{props.language}</li>
                            <li>{props.size}</li>
                            <li>{new Date(props.updated_at).toUTCString()}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}


export default Repos;