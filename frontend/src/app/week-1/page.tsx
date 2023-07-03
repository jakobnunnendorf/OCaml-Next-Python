import { Metadata } from 'next'
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const metadata = {
    title: "",
    description: "",
};

export default function Week1Page() {
    const Pseudocode =
        "DECLARE NumOfFloors: VARIABLE \nNumOfFloors <- 5\nDECLARE NumOfFloors: VARIABLE\nNumOfFloors <- 5\nDECLARE IsInArray: BOOLEAN\nDECLARE FloorNo: ARRAY[1:NumOfFloors]\nFUNCTION(INPUT (FloorNo)\nINPUT (Num)\nIF\nIsInArray <- FALSE\nFOR FloorNo <- 1 TO FloorNoLength\nIF FloorNo[I] = Num\nIsInArray = TRUE\nNEXT FloorNo\nIF IsInArray = FALSE\nFloorNo[I] = Num\n)\n";
    return (
        <section>
            <div>
                <Link href="/">
                    {" "}
                    <FiArrowLeft /> Back
                </Link>
                <h2 className="text-3xl text-center ">
                    <span className="font-bold">Week 1</span>- Pseudocode to
                    Javascript
                </h2>{" "}
            </div>
            <section className="pt-16 space-y-4">
                <h6>[Monday, 03 July 2023]</h6>
                <h3 className="text-2xl font-bold">The Elevator problem</h3>
                <div>
                    <h4 className="text-xl font-bold">Prompt</h4>
                    <p className="w-2/3">
                        We are running an elevator company and are currently
                        developing a new product. We want our product to work
                        for every building in the country, so we need it to be
                        able to handle a variable number of floors. <br />
                        <br />
                        <span className="flex items-center space-x-2">
                            <FiArrowRight />
                            <span>
                                Come up with a list of requirements it has to
                                fulfil. Then implement a Pseudocode algorithm
                                that meets the requirements.
                            </span>
                        </span>{" "}
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-bold">Requirements</h4>
                    <ul className="list-disc list-inside">
                        <li>
                            Must be able to handle a variable number of floors
                        </li>
                        <li>Should change direction as little as possible</li>
                        <li>
                            Should be able to handle multiple requests at once
                            and from different floors
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-2">
                        <span className="text-lg font-bold ">Pseudocode: </span>
                        <span className="">[Authored by Axel]</span>
                    </h4>
                    <pre className="p-4 text-orange-300 rounded-lg bg-slate-900 w-fit">
                        {Pseudocode}
                    </pre>
                </div>
            </section>
        </section>
    );
}
