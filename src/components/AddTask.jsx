import CustomInput from "./CustomInput";
import "./AddTask.scss";
import { useState } from "react";
const AddTask = () => {
    const [task, setTask] = useState("");
    const onchange = (e) => {
        setTask(e.target.value);
    };
    return (
        <div className="add-task-container">
            <CustomInput
                label="adicionar tarefa..."
                value={task}
                onChange={onchange}
            />
        </div>
    );
};
export default AddTask;
