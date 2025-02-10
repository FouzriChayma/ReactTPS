import React from 'react';
import Counter from './components/Counter';
import Example from './components/exemple.jsx';
import Example1 from './components/Exemple1.jsx';
import Example2 from './components/Exemple2.jsx';
import ListManager from './components/ListManager.jsx';
import ColorBox from './components/ColorBox.jsx';
import NoteManager from './components/NoteManager.jsx';
import ToDoList from './components/TodoList.jsx';
import EffectExample from './components/EffectExample.jsx';
import { ThemeDisplay, ThemeProvider } from './components/hre.jsx'; // Import both components
import UseRefExample from './components/UseRefExample';
import Events from './components/Events.jsx';  
import './App.css';
function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Mes Exercices React</h1>
        {/* This is how you properly comment in JSX */}
        {/* <Counter /> */}
        {/* <Example /> */}
        {/* <Example1 /> */}
        {/* <Example2 /> */}
        {/* <ListManager /> */}
        {/* <ColorBox initialColor="#ff5733" colorOptions={["#ff5733", "#33ff57", "#3357ff"]} /> */}
        {/* <NoteManager /> */}
        {/* <ToDoList /> */}
        {/* <EffectExample /> */}
        {/* <ThemeDisplay /> */}
        {/* <UseRefExample /> */}
        <Events />
      </div>
    </ThemeProvider>
  );
}
export default App;