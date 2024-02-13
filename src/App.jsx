import { useRef, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [completeTodos, setCompletedTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handelSubmit = () => {
    console.log(inputRef.current.value);
    const todo = {
      name: inputRef.current.value,
      id: Math.floor(Math.random() * 100000),
    }; // const todo = inputRef.current.value;
    setTodos([...todos, todo]);
    console.log(todos);
  };

  const handleCheck = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    console.log(todo);

    if (todo) {
      setCompletedTodos([...completeTodos, todo]);
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div className="m-10">
      <h1>Todo app</h1>
      <div>
        <input
          className="mr-5 mb-5"
          ref={inputRef}
          type="text"
          placeholder="Enter your todo here..."
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handelSubmit();
            }
          }}
        />
        <button onClick={handelSubmit}>+</button>
      </div>
      <div className=" w-1/3 h-96 flex  flex-col  overflow-y-auto ">
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="flex justify-between items-center my-5"
            >
              <div className="shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] p-2 w-96">
                <h1>{todo.name}</h1>
              </div>
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                onChange={() => handleCheck(todo.id)}
              />
            </div>
          );
        })}
      </div>
      <h1> Completed Todo</h1>
      <div className=" w-1/3 h-96 flex  flex-col  overflow-y-auto ">
        {completeTodos.map((todo) => {
          return (
            <div key={todo.id} className="flex">
              <h1 className="shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] my-5 p-2 line-through filter blur(2px) w-96 ">
                {todo.name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
