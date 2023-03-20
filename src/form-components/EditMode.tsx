import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEdit, setInEdit] = useState<boolean>(false);
    const [user, setUser] = useState<string>("Name");
    const [student, setStudent] = useState<boolean>(true);
    function update(event: React.ChangeEvent<HTMLInputElement>) {
        setUser(event.target.value);
    }
    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="editModeUpdate"
                    label="Edit Mode?"
                    checked={inEdit}
                    onChange={() => setInEdit(!inEdit)}
                />
            </div>
            <div>
                {inEdit === true && (
                    <Form.Group controlId="formUpdateName">
                        <Form.Label>Enter Name:</Form.Label>
                        <Form.Control value={user} onChange={update} />
                    </Form.Group>
                )}
            </div>
            <div>
                {inEdit === true && (
                    <Form.Check
                        type="checkbox"
                        id="studentUpdate"
                        label="Are you a Student?"
                        checked={student}
                        onChange={() => setStudent(!student)}
                    />
                )}
            </div>
            <div>
                {user} is {student === false ? "not a student" : "a student"}
            </div>
        </div>
    );
}
