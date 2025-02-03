import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Container, Typography, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h5" gutterBottom>
          Gestionnaire de Notes
        </Typography>
        <List>
          {notes.map((note, index) => (
            <ListItem 
            key={index} 
            divider
            secondaryAction={
              <IconButton edge="end" color="secondary" onClick={() => removeNote(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`Note: ${note}`} />
          </ListItem>
          
          ))}
        </List>
        <TextField
            fullWidth
            variant="outlined"
            label="Ajouter une note entre 0 et 20"
            type="number"
            slotProps={{ input: { min: 0, max: 20 } }}
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            sx={{ marginBottom: 2, marginTop: 1 }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={addNote}>
          Ajouter
        </Button>
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Moyenne: {average}
        </Typography>
      </Paper>
    </Container>
  );
};

export default NoteManager;
