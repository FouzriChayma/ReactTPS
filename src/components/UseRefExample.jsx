import React, { useRef } from 'react';

const UseRefExample = () => {
  // Création de la référence avec useRef
  const inputRef = useRef(null);

  // Fonction pour mettre le focus sur l'élément input
  const handleFocus = () => {
    // On accède à l'élément DOM via la référence et on applique le focus
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = '#f0f8ff'; // Change la couleur de fond pour l'illustration
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Utilisation de useRef pour accéder à un élément du DOM</h2>
      <input
        ref={inputRef} // Attache la référence à l'élément input
        type="text"
        placeholder="Cliquez sur le bouton pour le focus"
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <br />
      <button onClick={handleFocus} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Mettre le focus sur l'input
      </button>
    </div>
  );
};

export default UseRefExample;
