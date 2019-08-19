import React, { Component } from 'react';

const ViewNote = ({note}) => {

    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '65%',
        margin: '30px 10px 10px 30px'
    }

    if (!note) {
        return(<div style={divStyle}><h2>  No Note was selected </h2> </div>);
    }

    return(
            <div style={divStyle}> 
                <h2> {note.title} </h2>
                <p> {note.description} </p>
                <input type="button" title="Delete Note" value='Delete Note'  key={note.id} />
            </div>
            )
}

export default ViewNote;