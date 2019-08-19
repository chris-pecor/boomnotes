import React, { Component } from 'react';

class AddNote extends Component {

    constructor(props) {
        super(props);
        /* Initialize the state. */
        this.state = {
            newNote: {
                title: '',
                description: ''
            }
        }

        //Boilerplate code for binding methods with `this`
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);

    }

    /* This method dynamically accepts inputs and stores it in the state */
    handleInput(key, e) {

        /*Duplicating and updating the state */
        var state = Object.assign({}, this.state.newNote);
        state[key] = e.target.value;
        this.setState({newNote: state});
    }
    /* This method is invoked when submit button is pressed */
    handleSubmit(e) {
        //preventDefault prevents page reload   
        e.preventDefault();
        /*A call back to the onAdd props. The control is handed over
         *to the parent component. The current state is passed 
         *as a param
         */
        this.props.onAdd(this.state.newNote);
    }

    render() {
        const divStyle = {
            position: 'absolute',
            left: '35%',
            top: '60%',
            flexDirection: 'space-between',
            marginLeft: '30px'
        }

        const inputStyle = {
            margin: '0px 10px 0px 10px'
        }
        
        return(
                <div> 
                
                    <div style={divStyle}> 
                
                        <h2> Add new note </h2>
                
                        <form onSubmit={this.handleSubmit}>
                
                            <label> 
                                Title: 
                                <input style={inputStyle} type="text" onChange={(e) => this.handleInput('title', e)} />
                            </label>
                            <br/>
                            <label> 
                                Note:   
                                <textarea rows="8" cols="50" style={inputStyle} onChange={(e) => this.handleInput('description', e)}></textarea>
                            </label>
                
                            <input style={inputStyle} type="submit" value="Add Note" />
                
                        </form>
                
                    </div>
                
                </div>
                )
    }
}

export default AddNote;