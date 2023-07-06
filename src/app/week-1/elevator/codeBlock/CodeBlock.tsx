import React from "react";

export default async function CodeBlock() {
    const request = new Request(`/api/txt-to-string`, {
        cache: "no-store",
    });
    const res = await fetch(request);
    const pseudoCodeString = await res.json();
    return (
        <pre className="p-4 text-orange-300 rounded-md w-fit bg-slate-900">
            {pseudoCodeString}
        </pre>
    );
}
