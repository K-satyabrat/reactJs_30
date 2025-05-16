import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function createRandomHexUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function createRandomHexColor() {
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[createRandomHexUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function createRandomRgbColor() {
    const r = createRandomHexUtility(256);
    const g = createRandomHexUtility(256);
    const b = createRandomHexUtility(256);
    setColor(`rgb(${r},${g},${b})`);
    console.log();
  }
  
  useEffect(() => {
    if (typOfColor === "rgb") createRandomRgbColor();
    else createRandomHexColor();
  }, [typOfColor]);

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <button onClick={() => setTypeOfColor("hex")}>Generate HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
      <button
        onClick={
          typOfColor === "hex" ? createRandomHexColor : createRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
          marginTop: "50px",
          color: "#ffffff",
          flexDirection:"column",
          gap:'20px'
        }}
      >
        <h3>{typOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
