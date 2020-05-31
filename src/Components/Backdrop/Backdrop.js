import React from 'react';

const backdrop = (props) => <div onClick={props.closeNav} style={{
     position: 'fixed',
     top: 0,
     left: 0,
     width: '100%',
     height: '100vh',
     backgroundColor: 'rgba(0, 0, 0, .65)',
     zIndex: '5'
}} ></div>

export default backdrop;