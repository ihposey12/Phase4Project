import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul onClick={() => props.handleCancel()}>
      {props.notes.map(note => <NoteItem 
        key={note.id} 
        note={note} 
        handleNoteClick={props.handleNoteClick}
        handleNoteSearch={props.handleNoteSearch}
      />
      )}
    </ul>
  );
}

export default NoteList;
