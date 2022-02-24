import React from "react";
import "./styles.css";
import { useState } from "react";

const dataArray = [];

const Card = ({ title, desc }) => {
  return (
    <div className="card">
      <p>
        <b>{title}</b>
      </p>
      <hr />
      <p>{desc}</p>
    </div>
  );
};

export default function App() {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [data, setData] = useState(dataArray);

  function Handler() {
    Title && Desc && setData((prev) => [...prev, { title: Title, desc: Desc }]);
    setTitle("");
    setDesc("");
  }
  return (
    <div className="App">
      <h1> Notes </h1>

      <form className="notes-form">
        <input
          className="title-input"
          placeholder="Title"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="desc-input"
          value={Desc}
          placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
        />
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
