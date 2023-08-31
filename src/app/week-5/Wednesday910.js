import React from "react";
import { FiCheck } from "react-icons/fi";
import { supabase } from "../utils/supabase";

export default function Wednesday910({ todos }) {
    const todoObject = {
        name: "Do the dishes",
        dueDate: "2021-10-13",
        status: "Not started",
    };
    function addTodo(todoList, todoThatShouldBeAdded) {
        const lengthOfTodoList = todoList.length;
        todoList[lengthOfTodoList] = todoThatShouldBeAdded;
        return todoList;
    }

    return (
        <div className="flex flex-col items-center w-full py-8 border">
            {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
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
                    {todos.map((todo) => {
                        async function removeTodo() {
                            "use server";

                            const { error } = await supabase
                                .from("todos")
                                .delete()
                                .eq("id", todo.id);
                        }
                        return (
                            <tr key={todo} className="grid grid-cols-4">
                                <td>{todo.date}</td>
                                <td>{todo.title}</td>
                                <td>
                                    {todo.completed ? "completed" : "lazy ass"}
                                </td>
                                <td>
                                    <form
                                        action={removeTodo}
                                        className="w-full"
                                    >
                                        <button type="submit">X</button>
                                    </form>
                                </td>
                            </tr>
                        );
                    })}
                    
                
                </tbody>
            </table>
            <div className="flex py-8">
                <input
                    
                    type="text"
                    placeholder="Add Date"
                />
                <input
                   
                    type="text"
                    placeholder="Add new Date"
                />
                <select
                    
                    
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
                >
                    <p>Add </p>
                    <FiCheck />
                </button>
            </div>
            
        </div>
    );
}
