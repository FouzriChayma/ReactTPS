import { useState } from "react";
import { Button, Box } from "@mui/material";

const ColorBox = ({
  initialColor = "#3498db",
  colorOptions = ["#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6"],
}) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    const newColor = colorOptions[randomIndex];
    console.log("Nouvelle couleur:", newColor);
    setColor(newColor);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "16px" }}>
      <Box
        sx={{
          width: 128,
          height: 128,
          borderRadius: 2,
          boxShadow: 3,
          border: "1px solid black",
          backgroundColor: color,
        }}
      />

      <Button
        onClick={changeColor}
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
      >
        Changer de couleur
      </Button>
    </div>
  );
};

export default ColorBox;