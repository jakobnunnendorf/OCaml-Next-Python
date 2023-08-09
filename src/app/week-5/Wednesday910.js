import React from "react";

export default function Wednesday910() {
    const [todos, setTodos] = React.useState(["Todo 1", "Todo 2", "Todo 3"]);

    function removeTodo(todoList, todoThatShouldBeRemoved) {
        // todoThatShouldBeRemoved is a string
        // first find index:
        const ToDoCounter = todoList.length;
        let targetIndex;
        let i = 0;
        while (i < ToDoCounter) {
            if (todoList[i] === todoThatShouldBeRemoved) {
                targetIndex = i;
            }
            i++;
        }
        todoList.splice(targetIndex, 1);
        return todoList;
    }

    return (
        <div className="border">
            <div>Our ToDo List</div>
            {todos.map((todo) => {
                return (
                    <div key={todo} className="flex space-x-8">
                        <div>{todo}</div>
                        <button
                            onClick={(e) => {
                                console.log("clicked");
                                console.log(setTodos(removeTodo(todos, todo)));
                                setTodos(removeTodo(todos, todo));
                            }}
                        >
                            X
                        </button>
                    </div>
                );
            })}
            <button onClick={() => setTodos([...todos, "another todo"])}>
                Add another todo
            </button>
            <pre className="py-20">
                state is this: {JSON.stringify(todos, null, 2)}
            </pre>
        </div>
    );
}
