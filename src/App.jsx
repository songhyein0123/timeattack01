import React, { useState } from "react";
import "./App.css";

function App() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGoldChange = (event) => {
    setGold(Number(event.target.value));
  };

  const handleSilverChange = (event) => {
    setSilver(Number(event.target.value));
  };

  const handleBronzeChange = (event) => {
    setBronze(Number(event.target.value));
  };

  const handleAddCountry = (event) => {
    event.preventDefault();
    const newName = {
      name: name,
      medals: { gold, silver, bronze },
    };

    setNames([...names, newName]);
    setName("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 트래커</h1>
      <form className="input-group" onSubmit={handleAddCountry}>
        <p>국가명</p>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>금메달</p>
        <input type="number" value={gold} onChange={handleGoldChange} />
        <p>은메달</p>
        <input type="number" value={silver} onChange={handleSilverChange} />
        <p>동메달</p>
        <input type="number" value={bronze} onChange={handleBronzeChange} />
        <button type="submit">국가추가</button>
        <button>업데이트</button>
      </form>
      <div>
        {names.length === 0 ? (
          <p>국가를 추가해주세요.</p>
        ) : (
          <ul>
            {names.map((name, index) => (
              <li key={index}>
                {name.name} : 금메달 {name.medals.gold}, 은메달{" "}
                {name.medals.silver}, 동메달 {name.medals.bronze}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
