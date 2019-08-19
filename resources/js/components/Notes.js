import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ViewNote from './ViewNote';
import AddNote from './AddNote';
import EditNote from './EditNote';

class Main extends Component {

    constructor() {

        super();
        this.state = {notes: [], currentNote: null, edit: false}
        this.handleAddNote = this.handleAddNote.bind(this);
        this.handleEditNote = this.handleEditNote.bind(this);
        this.handleDeleteNote = this.handleDeleteNote.bind(this);
    }

    componentDidMount() {


        // I know this is super janky but I ran out of time
        // Allows for the /{id} requirement.
        fetch('/api/note')
                .then(response => {
                    return response.json();
                })
                .then(notes => {
                    this.setState({notes});
                });

        var pathArray = window.location.pathname.split('/');
        var noteId = pathArray[1];
        var currNote;
        if (noteId) {

            fetch('/api/note/' + noteId)
                    .then(response => response.json())
                    .then(json => {
                        this.setState({currentNote: json})
                    });

        } else {
            this.setState({currentNote: null})
        }

        // end of jank
    }

    handleSetEditTrue(note) {
        this.state.edit = true;
        this.setState({currentNote: note});

    }

    handleSetEditFalse(note) {
        this.state.edit = false;
        this.setState({currentNote: note});

    }

    handleClick(note) {

        this.handleSetEditFalse(note);
        this.setState({currentNote: note});

    }

    handleDeleteNote(note) {

        const currentNote = this.state.currentNote;
        fetch('api/note/' + note.id,
                {method: 'delete'})
                .then(response => {

                    var noteList = this.state.notes.filter(function (item) {

                        if (item.id !== note.id) {
                            return item;
                        }

                    });

                    if (response.status === 204) {
                        console.log('delete success');
                    }
                    this.handleSetEditFalse(null);
                    this.setState({notes: noteList, currentNote: null});

                });
    }

    handleAddNote(note) {
        fetch('api/note', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(note)
        })
                .then(response => {

                    return response.json();
                })
                .then(data => {

                    this.setState((prevState) => ({
                            notes: prevState.notes.concat(data),
                            currentNote: data
                        }))
                })

    }

    handleEditNote(note) {

        fetch('api/note/' + this.state.currentNote.id, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(note)
        })
                .then(response => {
                    if (response.status === 200) {
                        this.state.edit = false;
                        this.state.message = "Successfuly updated note.";
                    }

                    return response.json();
                })
                .then(data => {

                    var noteListEdit = this.state.notes.map(function (item, i) {
                        if (item.id === data.id) {
                            item = data;
                        }
                        return item;
                    });

                    this.setState({
                        notes: noteListEdit,
                        currentNote: data});
                })
    }

    renderNotes() {
        const listStyle = {
            listStyle: 'none',
            fontSize: '18px',
            lineHeight: '1.8em',
            cursor: 'pointer'
        }
        const btnStyle = {
            padding: '2px',
            margin: '5px'
        }
        console.log('rendering list');
        return this.state.notes.map(note => {
            return (
                    <li style={listStyle}  key={note.id}>
                        <a onClick={() => this.handleDeleteNote(note)} className='btn btn-danger' style={btnStyle}>Delete</a>
                        <a onClick={() => this.handleSetEditTrue(note)} className='btn btn-primary' style={btnStyle}>Edit</a>
                        <a onClick={() => this.handleClick(note)} className='btn btn-danger' style={btnStyle}>View</a>
                        { note.title } 
                    </li>
                    );
        })
    }

    render() {


        const mainDivStyle = {
            display: "flex",
            flexDirection: "row"
        }

        const divStyle = {

            justifyContent: "flex-start",
            padding: '10px',
            width: '35%',
            background: '#f0f0f0',
            padding: '20px 20px 20px 20px',
            margin: '30px 10px 10px 30px'

        }

        return (
                <div>
                    <div style= {mainDivStyle}>
                        <div style={divStyle}>
                            <h3> All notes </h3>
                            <ul>
                                { this.renderNotes() }
                            </ul>
                
                        </div>
                        <ViewNote note={this.state.currentNote} />
                        {(this.state.edit) ? <EditNote onEdit={this.handleEditNote} note={this.state.currentNote} /> : <AddNote onAdd={this.handleAddNote} /> }
                
                    </div>
                
                </div>

                );
    }
}

export default Main;


if (document.getElementById('reactor')) {
    ReactDOM.render(<Main />, document.getElementById('reactor'));
}