import React from "react";
import Item from "./Item";
import style from './Lista.module.scss';


function Lista() {
  let tarefas = [
    { tarefa: "React", tempo: "02:00:00" },
    { tarefa: "JavaScript", tempo: "01:00:00" },
    { tarefa: "TypeScript", tempo: "01:25:00" },
    { tarefa: "Git", tempo: "00:45:00" },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={() => {
        tarefas = [...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00" }]
      }}>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
