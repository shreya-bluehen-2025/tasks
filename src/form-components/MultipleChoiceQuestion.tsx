import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    function update(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <div>
                <Form.Group controlId="options">
                    <Form.Label>Options:</Form.Label>
                    <Form.Select value={answer} onChange={update}>
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
