"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function PseudoCode({
    CodeBlock,
}: {
    CodeBlock: React.ReactNode;
}) {
    const [expanded, setExpanded] = useState(false);
    const frame = (
        <div
            className={`${
                expanded ? "h-fit" : "h-96"
            } overflow-hidden rounded-lg w-fit space-y-4`}
        >
            <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center px-2 py-1 border rounded-md"
            >
                expand {expanded ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {CodeBlock}
        </div>
    );
    return frame;
}
