import React from 'react';

function StatusUpdater(props) {
    return (        
        <form id="statusUpdaterFrm" onSubmit={props.addStatus}>
            <input type="text" id="statusTxt" placeholder="What's on your mind?"></input>
            <button type="submit">Post</button>
        </form>        
    );
}

export default StatusUpdater;