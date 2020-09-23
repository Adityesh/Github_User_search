import React from 'react'
import ContentLoader from 'react-content-loader'

const RepoLoader = (props) => {
    console.log("RepoLoader" + props.animate);
    return(
        
            <ContentLoader animate height='900' width='800' backgroundColor='rgb(80, 77, 77)' foregroundColor='white' interval={0.1}>
                <rect x="10" y="0" rx="4" ry="4" width="600" height="150" />
                <rect x="10" y="200" rx="4" ry="4" width="600" height="150" />
                <rect x="10" y="400" rx="4" ry="4" width="600" height="150" />
                <rect x="10" y="600" rx="4" ry="4" width="600" height="150" />
            </ContentLoader>
        
    )
}


export default RepoLoader;


