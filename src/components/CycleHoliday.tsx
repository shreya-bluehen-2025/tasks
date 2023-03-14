import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎂" | "🎄" | "💖" | "🎆";
const alphabeticalOrder: Record<Holiday, Holiday> = {
    "🎂": "🎄",
    "🎄": "🎆",
    "🎆": "🎃",
    "🎃": "💖",
    "💖": "🎂"
};

const chronologicalOrder: Record<Holiday, Holiday> = {
    "💖": "🎂",
    "🎂": "🎆",
    "🎆": "🎃",
    "🎃": "🎄",
    "🎄": "💖"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("💖");
    function changeLetter(): void {
        const newHoliday = alphabeticalOrder[holiday];
        setHoliday(newHoliday);
    }
    function changeYear(): void {
        const newHoliday = chronologicalOrder[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button onClick={changeLetter}>Move Up A Letter</Button>
            <Button onClick={changeYear}>Move Up Year</Button>
        </div>
    );
}
