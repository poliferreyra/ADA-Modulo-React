import { Todo } from "../todo/Todo";
import { tasks } from "../../data/tasks";

import "./Card.css";

export const Card = () => {
  if (!tasks?.legnth) {
    <span>No hay tareas, vuelva mas tarde</span>;
  }
  return (
    <div className="container">
      <h2>ToDo App</h2>
      <div className="card">
        <input type="text" placeholder="Add your new ToDo" />
        <button>+</button>
      </div>
      <div className="size">
        {tasks.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <div className="pending">
        <span>
          You have{" "}
          <span>
            <strong>{tasks.length}</strong>
          </span>{" "}
          pending tasks
        </span>
        <button>Clear All</button>
      </div>
    </div>
  );
};
