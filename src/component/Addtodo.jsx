import { useContext, useRef } from "react";
import { IoIosAddCircle } from "react-icons/io"; // icons add
import { TodoItemsContext } from "../store/todo-items-store";

function Addtodo({ onNewItem }) {
  const { addNewItem } = useContext(TodoItemsContext);
  // useing useRef
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };
  return (
    <div>
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter ToDo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClick}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
