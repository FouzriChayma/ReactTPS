import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Typography, Container, Box } from '@mui/material';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('Moyenne'); // Default priority
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = () => {
    if (newTaskName.trim() !== '') {
      setTasks([
        ...tasks,
        { name: newTaskName.trim(), priority: newTaskPriority, completed: false },
      ]);
      setNewTaskName(''); // Clear input field
    }
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length || 0; // Handle undefined case

  return (
    <Container>
      <Box sx={{ textAlign: 'center', margin: '20px 0' }}>
        <Typography variant="h4">Todo List avec Priorités</Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <TextField
          label="Nom de la tâche"
          variant="outlined"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          sx={{ width: '60%' }}
        />
        <FormControl variant="outlined" sx={{ width: '30%' }}>
          <InputLabel>Priorité</InputLabel>
          <Select
            value={newTaskPriority}
            onChange={(e) => setNewTaskPriority(e.target.value)}
            label="Priorité"
          >
            <MenuItem value="Haute">Haute</MenuItem>
            <MenuItem value="Moyenne">Moyenne</MenuItem>
            <MenuItem value="Basse">Basse</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={addTask} sx={{ alignSelf: 'center' }}>
          Ajouter
        </Button>
      </Box>

      <Box sx={{ marginBottom: '20px' }}>
        <TextField
          label="Rechercher une tâche"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
        />
      </Box>

      <Typography variant="h6">Tâches:</Typography>
      <ul>
        {filteredTasks.map((task, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: task.completed ? '#e0f7fa' : '#fff',
              borderRadius: '5px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body1" sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name} - <span style={{ fontWeight: 'bold' }}>Priorité:</span> {task.priority}
              </Typography>
            </Box>
            <Box>
              <Button
                variant="outlined"
                onClick={() => completeTask(index)}
                sx={{ marginRight: '10px' }}
              >
                {task.completed ? 'Marquer comme Incomplète' : 'Marquer comme Terminée'}
              </Button>
              <Button variant="outlined" color="error" onClick={() => deleteTask(index)}>
                Supprimer
              </Button>
            </Box>
          </Box>
        ))}
      </ul>

      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="body1">Total des tâches: {totalTasks}</Typography>
        <Typography variant="body1">Tâches terminées: {completedTasks}</Typography>
      </Box>
    </Container>
  );
}

export default TodoList;
