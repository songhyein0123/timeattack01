// App.jsx
import React from "react";
import "./App.css";

function App() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState("");
  const [gold, setGold] = usestate(0);
  const [silver, setSilver] = usestate(0);
  const [bronze, setBronze] = usestate(0);

  const handleNameChange = (event) => {
    setName(event.targer.value);
  };

  const handleGoldChange = (event) => {
    setGold(Number(event.targer.value));
  };

  const handleSilverChange = (event) => {
    setSilver(Number(event.targer.value));
  };

  const handleBronzeChange = (event) => {
    setBronze(Number(event.targer.value));
  };

  const handleAddCountry = (event) => {
    event.preventDefault();
    const newName = {
      name: name,
      medals: { gold, silver, bronze },
    };

    setNames([...name, newName]);
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
        <input type="text" value={"name"} onChange={handleNameChange} />
        <p>금메달</p>
        <input type="Number" value={"gold"} onChange={handleGoldChange} />
        <p>은메달</p>
        <input type="Number" value={"silver"} onChange={handleSilverChange} />
        <p>동메달</p>
        <input type="Number" value={"bronze"} onChange={handleBronzeChange} />
        <button type="submit">국가추가</button>
        <button>업데이트</button>
      </form>
      <div>
        (name.length === 0 ? (<p>국가를 추가해주세요.</p>)) : ({" "}
        <ul>
          {names.map((name, index) => (
            <li key={index}>
              {name.name} : 금메달 {name.medals.gold}, 은메달{" "}
              {name.medals.silver}, 동메달 {name.medals.bronze}
            </li>
          ))}
        </ul>
        )
      </div>
    </div>
  );
}

export default App;
