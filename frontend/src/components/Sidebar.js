import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList 
          notes={this.props.notes} 
          handleNoteClick={this.props.handleNoteClick}
          handleCancel={this.props.handleCancel}
        />
        
        <button onClick={(e) => this.props.postNote(e)}>New</button>
      </div>
    );
  }
}

export default Sidebar;
