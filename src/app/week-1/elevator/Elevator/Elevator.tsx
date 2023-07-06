"use client";
import React, { useState } from "react";

export default function Elevator() {
    const [currentFloor, setCurrentFloor] = useState(6);
    const [floorRequests, setFloorRequests] = useState<number[]>([]);

    const styles = {
        floor: {
            gridRowStart: 7 - currentFloor,
            gridRowEnd: "span 1",
        },
    };

    const requestFloor = (floor: number) => {
        if (!floorRequests.includes(floor)) {
            setFloorRequests([...floorRequests, floor].sort());
        }
    };

    const processRequests = () => {
        if (floorRequests.length > 0) {
            const nextFloor = floorRequests[0];
            setFloorRequests(floorRequests.slice(1));
            setCurrentFloor(nextFloor);
        }
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            processRequests();
        }, 1000);
        return () => clearInterval(interval);
    }, [floorRequests]);

    const house = (
        <div className=" w-fit h-fit">
            <div className="flex w-fit h-fit">
                <div className="grid">
                    {[6, 5, 4, 3, 2, 1].map((floor) => (
                        <div
                            key={floor}
                            className="grid h-24 border w-96 place-items-center"
                        >
                            <div>Floor {floor}</div>
                        </div>
                    ))}
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
            <div className="grid w-full h-24 grid-cols-3 grid-rows-2">
                {[6, 5, 4, 3, 2, 1].map((floor) => (
                    <button
                        key={floor}
                        className="border"
                        onClick={() => requestFloor(floor)}
                    >
                        {floor}
                    </button>
                ))}
            </div>
        </div>
    );
    return house;
}
