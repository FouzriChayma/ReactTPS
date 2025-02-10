import React, { useState, useEffect } from "react";

const SimpleEffectExample = () => {
  // Crée un état pour le compteur
  const [count, setCount] = useState(0);

  // useEffect exécuté lors du montage du composant
  // Il s'exécute une fois au montage du composant et affiche un message dans la console.
  useEffect(() => {
    console.log("Composant monté");
    
    // Fonction de nettoyage lors du démontage
    return () => {
      console.log("Composant démonté");
    };
  }, []); // Le tableau vide [] signifie que l'effet ne s'exécute qu'une seule fois

  // useEffect exécuté lorsque 'count' change
  // S'exécute chaque fois que l'état count change, affichant la nouvelle valeur de count dans la console.
  useEffect(() => {
    console.log("Le compteur a changé :", count);
  }, [count]); // Le tableau [count] signifie que l'effet s'exécute à chaque changement de 'count'

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Exemple Simple useEffect</h1>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: "5px", padding: "10px" }}>
        Incrémenter
      </button>
    </div>
  );
};

export default SimpleEffectExample;
