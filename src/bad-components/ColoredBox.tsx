import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    function Color() {
        setColorIndex(1 + colorIndex);
        if (colorIndex === 2) {
            setColorIndex(0);
        }
    }
    return (
        <div>
            <h3>Colored Box</h3>
            <span>Current Color: {COLORS[colorIndex]}</span>
            <div>
                <Button onClick={() => Color()}>Next Color</Button>
            </div>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: COLORS[colorIndex],
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        </div>
    );
}
