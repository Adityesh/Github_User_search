import React from 'react';
import ContentLoader from 'react-content-loader'




const UserLoader = (props) => {
    return(
        
            <ContentLoader animate={true} height='400' width='800' animate >
                <circle cx="200" cy="200" r="100" />
                <rect x="330" y="110" rx="4" ry="4" width="300" height="175" />
                
            </ContentLoader>
        
    )
}


export default UserLoader;