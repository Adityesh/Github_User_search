import React from 'react'
import ContentLoader from 'react-content-loader'

const RepoLoader = (props) => {
    return(
        <div>
            <ContentLoader animate={props.loading} height='400' width='800' animate >
                <rect x="330" y="130" rx="4" ry="4" width="600" height="50" />
                <rect x="330" y="190" rx="4" ry="4" width="600" height="50" />
                <rect x="330" y="250" rx="4" ry="4" width="600" height="50" />
                <rect x="330" y="310" rx="4" ry="4" width="600" height="50" />
            </ContentLoader>
        </div>
    )
}


export default RepoLoader;


