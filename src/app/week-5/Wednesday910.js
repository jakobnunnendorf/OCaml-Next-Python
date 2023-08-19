import React from "react";
import { FiCheck } from "react-icons/fi";

export default function Wednesday910() {
    const todoObject = {
        name: "Do the dishes",
        dueDate: "2021-10-13",
        status: "Not started",
    };

    const [todos, setTodos] = React.useState([todoObject]);
    const [newTodoName, setNewTodoName] = React.useState([]);
    const [newTodoStatus, setNewTodoStatus] = React.useState([]);
    const [newTodoDate, setNewTodoDate] = React.useState([]);

    function removeTodo(todoList, todoThatShouldBeRemoved) {
        const todoListWithoutTodoThatShouldBeRemoved = todoList.filter(
            (todo) => todo !== todoThatShouldBeRemoved
        );
        return todoListWithoutTodoThatShouldBeRemoved;
    }

    function addTodo(todoList, todoThatShouldBeAdded) {
        const lengthOfTodoList = todoList.length;
        todoList[lengthOfTodoList] = todoThatShouldBeAdded;
        return todoList;
    }

    return (
        <div className="flex flex-col items-center w-full py-8 border">
            <h2 className="py-8 text-2xl text-center">Our ToDo List</h2>
            <table className="mx-auto w-96">
                <thead>
                    <tr className="grid grid-cols-4 gap-4">
                        <th>Due Date</th>
                        <th>Todo</th>
                        <th>Status</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo} className="grid grid-cols-4">
                            <td>{todo.dueDate}</td>
                            <td>{todo.name}</td>
                            <td>{todo.status}</td>
                            <td>
                                <button
                                    className="w-full"
                                    onClick={() => {
                                        setTodos(removeTodo(todos, todo));
                                    }}
                                >
                                    X
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex py-8">
                <input
                    onChange={(event) => setNewTodoDate(event.target.value)}
                    type="text"
                    placeholder="Add Date"
                />
                <input
                    onChange={(event) => setNewTodoName(event.target.value)}
                    type="text"
                    placeholder="Add new Date"
                />
                <select
                    onChange={(event) => setNewTodoStatus(event.target.value)}
                    value={newTodoStatus}
                    placeholder="Select status"
                >
                    <option name="" id="">
                        Not started
                    </option>
                    <option name="" id="">
                        In progress
                    </option>
                    <option name="" id="">
                        Done
                    </option>
                </select>
                <button
                    className="flex items-center justify-center gap-2 px-4 py-2 ml-4 border rounded-xl"
                    onClick={() => {
                        const newTodo = {
                            name: newTodoName,
                            dueDate: newTodoDate,
                            status: newTodoStatus,
                        };
                        const newTodoList = addTodo(todos, newTodo);
                        setTodos(newTodoList);
                    }}
                >
                    <p>Add </p>
                    <FiCheck />
                </button>
            </div>
            <pre className="py-20">
                state is this: {JSON.stringify(newTodoDate, null, 2)}
            </pre>
        </div>
    );
}
