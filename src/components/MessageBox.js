import React from 'react';

function MessageBox(props) {
    return (
        <div className="alert alert-warning" role="alert">
            {props.children}
        </div>
    )
}

export default MessageBox;
