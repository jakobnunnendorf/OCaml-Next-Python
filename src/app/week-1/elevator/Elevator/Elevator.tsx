import { stringify } from "querystring";
import React from "react";

export default function Elevator() {
    const currentFloor = 6;
    const styles = {
        floor: {
            gridRowStart: 7 - currentFloor,
            gridRowEnd: "span 1",
        },
    };


    
    const house = (
        <div className="flex w-fit h-fit">
            <div className="grid">
                <div className="grid h-24 border w-96 place-items-center">
                    6th Floor
                </div>
                <div className="grid h-24 border w-96 place-items-center">
                    5th Floor
                </div>
                <div className="grid h-24 border w-96 place-items-center">
                    4th Floor
                </div>
                <div className="grid h-24 border w-96 place-items-center">
                    3rd Floor
                </div>
                <div className="grid h-24 border w-96 place-items-center">
                    2nd Floor
                </div>
                <div className="grid h-24 border w-96 place-items-center">
                    1st Floor
                </div>
            </div>
            <div className="grid flex-grow w-24 grid-rows-6 border direction-rtl">
                <div
                    style={styles.floor as React.CSSProperties}
                    className="grid row-span-1 border place-items-center"
                >
                    Elevator
                </div>
            </div>
        </div>
    );
    return house;
}
