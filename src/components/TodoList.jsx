import PropTypes from "prop-types";

const TodoList = ({ todo, setTodo }) => {
  const handleDelete = (task) => {
    const index = todo.indexOf(task);
    const newTodos = todo.toSpliced(index, 1);

    setTodo(newTodos);
  };

  return (
    <ul>
      {todo.map((t, index) => (
        <li key={index}>
          {t} <button onClick={() => handleDelete(t)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todo: PropTypes.array.isRequired,
  setTodo: PropTypes.func.isRequired,
};

export default TodoList;
