import { useState } from "react";
import PropTypes from "prop-types";

const TodoInput = ({ todo, setTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => setInputValue(event.target.value);

  const handleClick = () => setTodo([...todo, inputValue]);

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Valider</button>
    </div>
  );
};

TodoInput.propTypes = {
  todo: PropTypes.array.isRequired,
  setTodo: PropTypes.func.isRequired,
};

export default TodoInput;
