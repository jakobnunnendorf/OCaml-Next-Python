"use client";
import React from "react";
import fibonacci from "./fibonacci";

export default function FibonacciComponent() {
    const [n, setN] = React.useState(0);

    return (
        <div className="py-8">
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
                {fibonacci(n).map((element: any) => {
                    return `${element}, `;
                })}
            </pre>
        </div>
    );
}
