import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
    // // get filePath from request
    // const filePath = `https://${process.env.VERCEL_URL}/week-1/elevator/pseudoCode.txt`;
    const filePath = path.join(
        process.cwd(),
        "src/app/week-1/elevator/pseudoCode.txt"
    );
    // read file
    const txtAsString = fs.readFileSync(filePath, "utf8");
    // return file contents
    return NextResponse.json(txtAsString);
}
