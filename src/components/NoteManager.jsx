import React, { useState } from 'react';

const NoteManager = ({ initialNotes = [] }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    const note = parseFloat(newNote);
    if (!isNaN(note) && note >= 0 && note <= 20) {
      setNotes([...notes, note]);
      setNewNote("");
    }
  };

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const average = notes.length ? (notes.reduce((acc, n) => acc + n, 0) / notes.length).toFixed(2) : 0;

  return (
    <div>
      <h2>Gestionnaire de Notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note} <button onClick={() => removeNote(index)}>Supprimer</button></li>
        ))}
      </ul>
      <input type="number" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
      <button onClick={addNote}>Ajouter</button>
      <p>Moyenne: {average}</p>
    </div>
  );
};

export default NoteManager;
