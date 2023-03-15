import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function start(): void {
        setAttempt(attempt - 1);
        setProgress(true);
    }
    return (
        <div>
            <span>Attempts: {attempt}</span>
            <Button
                onClick={start}
                disabled={progress === true || attempt === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => setProgress(false)}
                disabled={progress === false}
            >
                End Quiz
            </Button>
            <Button
                onClick={() => setAttempt(attempt + 1)}
                disabled={progress === true}
            >
                Mulligan
            </Button>
        </div>
    );
}
