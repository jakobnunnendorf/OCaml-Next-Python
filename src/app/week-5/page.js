"use client";
import React from "react";
import fibonacci from "./fibonacci/fibonacci";

export default function Page() {
    const [n, setN] = React.useState(0);
    return (
        <div>
            <h2>Try our Fibonacci function generating numbers up to n</h2>
            <label>
                Enter number of elements:
                <input
                    onChange={(e) => setN(parseInt(e.target.value))}
                    type="text"
                    placeholder=""
                    className="bg-slate-200"
                />
            </label>
            <pre>
                {fibonacci(n).map((element) => {
                    return `${element}, `;
                })}
            </pre>
        </div>
    );
}

// yarn dev