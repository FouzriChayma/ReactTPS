import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Container, Typography, Paper } from '@mui/material';

const ListManager = ({ initialItems = [], placeholder = "Add new item" }) => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h5" gutterBottom>
          Liste :
        </Typography>
        <List>
          {items.map((item, index) => (
            <ListItem key={index} divider>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <TextField
          fullWidth
          variant="outlined"
          label={placeholder}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          sx={{ marginBottom: 2, marginTop: 1 }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={addItem}>
          Ajouter
        </Button>
      </Paper>
    </Container>
  );
};

export default ListManager;
