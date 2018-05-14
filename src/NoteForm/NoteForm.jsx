import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            newNoteContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value,
        })
    }

    writeNote(e){

        if (e.key === 'Enter' && e.type === 'keypress') {
            this.props.addNote(this.state.newNoteContent);
            this.setState({
                newNoteContent: '',
            })
        }

        if ( e.type === 'click' ) {
            this.props.addNote(this.state.newNoteContent);
            this.setState({
                newNoteContent: '',
            })
        }
    }

    render() {
        return(
            <div className="formWrapper">
                <input className="noteInput"
                    placeholder="Write a new note and press enter "
                    value={this.state.newNoteContent}
                    onChange={this.handleUserInput} 
                    onKeyPress={this.writeNote}/>
            </div>
        )
    }

}

export default NoteForm;