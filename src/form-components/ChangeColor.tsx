import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white"
];
const color = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>(color);
    function update(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }
    return (
        <div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: chosenColor,
                    width: "50px",
                    height: "50px"
                }}
            >
                {chosenColor}
            </div>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="options"
                        onChange={update}
                        id="color-option"
                        label={
                            <div
                                style={{
                                    backgroundColor: color,
                                    width: "50px",
                                    height: "50px"
                                }}
                            >
                                {color}
                            </div>
                        }
                        value={color}
                    />
                ))}
            </div>
        </div>
    );
}
