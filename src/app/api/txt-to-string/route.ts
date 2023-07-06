import { NextResponse } from "next/server";
import fs from "fs";

export async function GET(req: Request) {
    // // get filePath from request
    const reqBody = await req;
    const filePath = "src/app/week-1/elevator/pseudoCode.txt";
    // read file
    const txtAsString = fs.readFileSync(filePath, "utf8");
    // return file contents
    return NextResponse.json(txtAsString);
}