import "../card/Card.css";

export const Todo = ({ todo }) => {
  if (todo.done) {
    return (
      <div className="check">
        <button className="cross todoButton">{todo.title}</button>
        <button className="delete">🗑</button>
      </div>
    );
  }

  return (
    <div>
      <button className="todoButton">{todo.title}</button>
    </div>
  );
};
