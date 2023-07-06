import { NextResponse } from "next/server";
import fs from "fs";

export async function GET() {
    // // get filePath from request
    const filePath = "src/app/week-1/elevator/pseudoCode.txt";
    // read file
    const txtAsString = fs.readFileSync(filePath, "utf8");
    // return file contents
    return NextResponse.json(txtAsString);
}
