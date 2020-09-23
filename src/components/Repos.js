import React from 'react'
import RepoLoader from './RepoLoader';
const Repos = (props) => {
    return (
        <div className='repo' style={{height : 400, width : 800, position : 'relative'}}>
            {props.loading === 1 ? <RepoLoader animate={props.loading} /> : null}
            
            {props.loading === 0 ? null : null}
            {props.loading === 2 ? props.repos.map((item, index) => {
                return (
                        <ul className="repoHolder" key={index} style={{marginBottom : 10}}>
                            <li>{item.name}</li>
                            <li>{item.description ? item.description : 'No description available'}</li>
                            <li>{item.language ? item.language : 'No language available'}</li>
                            <li>{item.size}</li>
                            <li>{new Date(item.updated_at).toUTCString()}</li>
                        </ul>
                )
            }) : null}
        </div>
    )
}


export default Repos;