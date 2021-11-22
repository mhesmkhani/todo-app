import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTodo } from "../redux/actions/todo";
import Todo from "./Todo";
export default function TodoList() {
  const todos = useSelector((s) => s.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const renderTodo = () => {
      return(
          <ul className="todoList">
              {todos.map(({ id, description }) => (
                  <Todo id={id} description={description} />
              ))}
          </ul>
      )
  }
  return (
    <div>
        {renderTodo()}
    </div>
  );
}
