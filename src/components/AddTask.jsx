import CustomInput from "./CustomInput";
import "./AddTask.scss";

import { useState } from "react";
import CustomButton from "./CustomButton";
import { FaPlus } from "react-icons/fa";

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
            <CustomButton>
                <FaPlus size={14} color="white" />
            </CustomButton>
        </div>
    );
};
export default AddTask;
