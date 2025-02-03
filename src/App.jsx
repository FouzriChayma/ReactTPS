import React from 'react';
import Counter from './components/Counter';
import ListManager from './components/ListManager';
import ColorBox from './components/ColorBox';
import NoteManager from './components/NoteManager';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <h1>Mes Exercices React</h1>
      <Counter initialCount={10} step={2} />
      <ListManager initialItems={['React', 'Angular', 'VueJs']} placeholder="Ajouter une technologie" />
      <ColorBox initialColor="#ff5733" colorOptions={["#ff5733", "#33ff57", "#3357ff"]} />
      <NoteManager initialNotes={[12, 15, 18]} />
      <TodoList initialTasks={[{ name: "Réviser React", priority: "Haute", completed: false }]} />
    </div>
  );
}

export default App;
