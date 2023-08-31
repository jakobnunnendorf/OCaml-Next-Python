import React from "react";
import Wednesday910 from "./Wednesday910";
import FibonacciComponent from "./fibonacci/FibonacciComponent";
import { supabase } from "../utils/supabase";

export default async function Page() {
    const { data, error } = await supabase.from("todos").select("");
    console.log(data, error);
    return (
        <div className="">
            <FibonacciComponent />
            <Wednesday910 todos={data} />
        </div>
    );
}

// yarn dev
// https://o-caml-next-python.vercel.app/
