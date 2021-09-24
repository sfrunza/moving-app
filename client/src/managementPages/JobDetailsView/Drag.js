import { useState } from "react";

function Card({ name, active }) {
  const [isDragging, setIsDragging] = useState(false);

  function handleDragStart(e) {
    setIsDragging(true);
    const data = JSON.stringify({ type: "card" });
    e.dataTransfer.setData("text/plain", data);
  }

  function handleDragEnd(e) {
    setIsDragging(false);
    e.dataTransfer.clearData();
  }

  return (
    <div
      className="card"
      style={{
        backgroundColor: isDragging ? "#fbb" : "palegoldenrod",
        color: active ? "red" : "blue",
      }}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {name}
    </div>
  );
}

function Box({ card, moveCard, name, active }) {
  const [isOver, setIsOver] = useState(false);

  function handleDragOver(e) {
    if (e.dataTransfer.types[0] === "text/plain") {
      setIsOver(true);
      e.preventDefault();
    }
  }

  function handleDrop(e) {
    const dataJSON = e.dataTransfer.getData("text/plain");
    let data;
    try {
      data = JSON.parse(dataJSON);
    } catch {}
    if (data && data.type === "card") {
      moveCard();
    }
  }

  function handleDragLeave() {
    setIsOver(false);
  }

  return (
    <div
      className="box"
      style={{ backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12)" }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
    >
      {card ? <Card name={name} active /> : <Card name={name} />}
    </div>
  );
}

export default function Drag() {
  const [index, setIndex] = useState(1);
  // const [active, setActive] = useState(false);

  function moveCard(i) {
    setIndex(i);
    // setIndex(true);
  }

  return (
    <div className="drag">
      <Box
        card={index === 1}
        moveCard={moveCard.bind(null, 1)}
        name="one"
      ></Box>
      <Box
        card={index === 2}
        moveCard={moveCard.bind(null, 2)}
        name="two"
      ></Box>
      <Box
        card={index === 3}
        moveCard={moveCard.bind(null, 3)}
        name="three"
      ></Box>
    </div>
  );
}
