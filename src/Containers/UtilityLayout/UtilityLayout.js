import React from 'react';
import Toolbar from '../Toolbar/Toolbar';

const UtilityLayout = (props) => {

    
        return <React.Fragment>
                   <Toolbar />
                   { props.children }
               </React.Fragment>
    
}

export default UtilityLayout;