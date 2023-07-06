import React from "react";

export default async function CodeBlock() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/txt-to-string`);
    const pseudoCodeString = await res.json();
    return (
        <pre className="p-4 text-orange-300 rounded-md w-fit bg-slate-900">
            {pseudoCodeString}
        </pre>
    );
}
