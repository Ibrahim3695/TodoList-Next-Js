"use client"

import { useState } from "react";
import "./todo.css"

export default function Home() {
  const [inputTodo, setinputTodo] = useState("")
  const [todo, setTodo] = useState([])


  const handleInputTodo = () => {

    const newTodoList = [...todo]; // Create a copy of the todo array
    newTodoList.push(inputTodo); // Add the new todo item to the copy
    setTodo(newTodoList); // Update the state with the new array
    setinputTodo(""); // Clear the input field

    
    // setTodo([inputTodo, ...todo])

    console.log(todo)
    
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleInputTodo();
    }

  }


  return (
    <main>
      <div className="main-container">
        <section className="main-box">
          <article className="article">

            <input
              type="text" placeholder="Input your  new todo"
              onChange={(e) => setinputTodo(e.target.value)}
              value={inputTodo}
              onKeyDown={handleKeyDown}
            />

            <div className="icon" onClick={handleInputTodo}>
              <svg xmlns="http://www.w3.org/2000/svg"
                height="24px" viewBox="0 -960 960 960"
                width="24px"
                fill="#282851">
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" id="icon" />
              </svg>
            </div>
          </article>

          <article className="main-drop-down">
            <aside className="scroll">

                {
                  todo.map((e, id) => (
              <div id="card-map">
                    <section className="arrange-icon" key={id}>
                      {e}
                    </section>
              </div>
                  ))
                }
            </aside>
          </article>
        </section>

      </div>
    </main>
  );
}
