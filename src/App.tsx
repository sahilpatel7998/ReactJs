import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Task } from './interface';
import TodoList from './todoList';
import './App.css';

const App: FC = () => {

  const [task, setTask] = useState<string>("");

  const [number, setNumber] = useState<number>(0);

  const [todoList, setTodoList] = useState<Task[]>([])


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {

    if (event.target.name === "task") {
      setTask(event.target.value)
    }
    else {
      setNumber(Number(event.target.value))
    }
  };

  const addTask = () => {

    if (!task) {
      alert("please add the item")
    } else {

      const newTask = { newTask: task, numbers: number }
      setTodoList([...todoList, newTask])

      setTask("");

      setNumber(0);
    }

  }
  const completeTask = (taskNameToDelete: string): void => {

    setTodoList(todoList.filter((task) => {
      return task.newTask != taskNameToDelete
    })
    );
  }

  const removeAll = () => {
    setTodoList([])
  }

  useEffect(() => {

    localStorage.setItem("list", JSON.stringify(todoList))
  }, [todoList, task])

  return (
    <div className="App">

      <div className="main_div">

        <div className="input_container">
          <input
            type="text"
            placeholder="Add your list here!"
            onChange={handleChange}
            name="task"
            value={task}
          />
          <input
            type="number"
            placeholder="Add your number"
            onChange={handleChange}
            name="numbers"
            value={number}
          />
          <div className="todo">
            <button className="btn" onClick={addTask}>Add Item</button>
          </div>


          <div>
            <button className="btn" onClick={removeAll}>Remove All</button>
          </div>

          {/* </div> */}
          <div className = "show_output">
            {
              todoList.map((task: Task, key: number) => {
                return <TodoList key={key} task={task} completeTask={completeTask} />
              })
            }
          </div>
        </div>
      </div>
    </div>



  )


}

export default App;