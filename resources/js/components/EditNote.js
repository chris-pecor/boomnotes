import React, { Component } from 'react';

class EditNote extends Component {

    constructor(props) {
        super(props);


        


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);


    }
    

    handleInput(key, e) {

        console.log(this.props.note);
        var state = Object.assign(this.props.note, key);
        state[key] = e.target.value;
        this.setState({note: state});

    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onEdit(this.props.note);

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
                
                        <h2> Edit note </h2>
                
                        <form onSubmit={this.handleSubmit}>
                            <input type='hidden' name='id' value={this.props.note.id} />
                            <label> 
                                Title: 
                                <input style={inputStyle} type="text" onChange={(e) => this.handleInput('title', e)} value={this.props.note.title} />
                            </label>
                            <br/>
                            <label> 
                                Note:   
                                <textarea rows="8" cols="50" style={inputStyle} onChange={(e) => this.handleInput('description', e)} value={this.props.note.description}></textarea>
                            </label>
                
                            <input style={inputStyle} type="submit" value="Edit Note" />
                
                        </form>
                
                    </div>
                
                </div>

                )
    }
}

export default EditNote;