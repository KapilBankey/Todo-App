import { createContext } from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
}); // initial value is empty items
//createcontext :->
