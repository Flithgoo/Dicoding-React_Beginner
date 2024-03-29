import React from "react";
import { getInitialData } from '../utils/index';
import NotesList from "./NotesList";
import SearchBar from "./SearchBar";
import NotesForm from "./NotesForm";
import NotesHeader from "./NotesHeader";
import NotesFooter from "./NotesFooter";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchTerm: '',
      initialNotes: [],
    }
    this.addedNotes = [];
  
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this); 
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    this.addNoteToArchive = this.addNoteToArchive.bind(this);
    this.removeNoteFromArchive = this.removeNoteFromArchive.bind(this);
  }

  componentDidMount() {
    this.setState({ initialNotes: this.state.notes });
  }

  addNoteToArchive(Id) {
    const newData = [...this.state.notes];
    for(const note of newData){
      if (note.id === Id) {
        note.archived = true
        this.setState({ notes: newData });
      }
    }
  }
  
  removeNoteFromArchive(Id) {
    const newData = [...this.state.notes];
    for(const note of newData){
      if (note.id === Id) {
        note.archived = false
        this.setState({ notes: newData });
      }
    }
  }

  onSearchChangeHandler(searchTerm) {
    const fullData = [...this.state.initialNotes, ...this.addedNotes]
    if (searchTerm === '') {
      this.setState({ notes: fullData});
    } else {
      console.log(this.state.notes)
      const filteredData = fullData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
      this.setState({ notes: filteredData });
    }
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    const initialNotes = this.state.initialNotes.filter(note => note.id !== id);
    this.addedNotes = this.addedNotes.filter(note => note.id !== id);
    this.setState({ notes, initialNotes});
  }

  onAddNotesHandler({ title, body, archived }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived,
      createdAt: new Date(),
    };

    this.addedNotes.push(newNote);

    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
    }));
 }
  
  render() {
    return (
      <>
        <NotesHeader />
        <div className="wrapper">
          <NotesForm addNote={this.onAddNotesHandler}/>
          <SearchBar onSearchChange={this.onSearchChangeHandler} />
          <NotesList addArchive={this.addNoteToArchive} isArchived={false} notes={this.state.notes} onDelete={this.onDeleteHandler} />
          <NotesList removeArchive={this.removeNoteFromArchive} isArchived={true} notes={this.state.notes} onDelete={this.onDeleteHandler} />
        </div>
        <NotesFooter />
      </>   
    );
  }
 }

export default NotesApp