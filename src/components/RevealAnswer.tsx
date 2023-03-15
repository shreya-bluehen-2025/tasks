import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(true);
    function flip(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={flip}>Reveal Answer</Button>
            {!visible && <div>42</div>}
        </div>
    );
}
