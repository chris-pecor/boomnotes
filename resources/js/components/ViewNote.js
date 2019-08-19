import React, { Component } from 'react';

const ViewNote = ({note}) => {

    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '65%',
        margin: '30px 10px 10px 30px'
    }

    if (!note) {
        return(<div style={divStyle}><h3></h3> </div>);
    }

    return(
            <div style={divStyle}> 
                <h2> {note.title} </h2>
                <p> {note.description} </p>
                <p>Created: {note.created_at} </p>
                <p>Updated: {note.updated_at} </p>
            </div>
            )
}

export default ViewNote;