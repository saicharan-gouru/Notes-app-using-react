import React from "react";
import "./styles.css";
import { useState } from "react";

let dataArray = [
  {
    id: 1,
    title: "HI",
    desc: "BYE"
  }
];

const Card = ({ title, desc }) => {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default function App() {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [data, setData] = useState(dataArray);

  function Handler() {
    setData((prev) => [...prev, { title: Title, desc: Desc }]);
    setTitle("");
    setDesc("");
  }
  return (
    <div className="App">
      <h1> Notes </h1>

      <form className="notes-form">
        <input value={Title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={Desc} onChange={(e) => setDesc(e.target.value)} />
      </form>

      <button className="btn" onClick={Handler}>
        Add note
      </button>
      <div className="notes-cards">
        {data.map((obj) => (
          <Card title={obj.title} desc={obj.desc} />
        ))}
      </div>
    </div>
  );
}
