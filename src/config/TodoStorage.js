export const getTodosFromStorage = () => {
    let storageTodos = localStorage.getItem("todos");
    let todos = !storageTodos ? [] : JSON.parse(storageTodos);
    return todos;
};
