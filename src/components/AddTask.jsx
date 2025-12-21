import CustomInput from "./CustomInput";
import "./AddTask.scss";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const AddTask = ({ fetchTasks }) => {
    const [task, setTask] = useState("");

    const onchange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAdd = async () => {
        try {
            if (!task.trim()) {
                return toast.error(
                    "Alerta, a tarefa precisa de uma descrição!"
                );
            }

            await axios.post("http://localhost:8000/tasks", {
                description: task,
                isCompleted: false,
            });

            setTask("");
            fetchTasks();

            toast.success("Tarefa adicionada com sucesso!");
        } catch (error) {
            console.error("Erro ao salvar:", error);
            toast.error("Erro ao salvar tarefa");
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="adicionar tarefa..."
                value={task}
                onChange={onchange}
            />
            <CustomButton onClick={handleTaskAdd}>
                <FaPlus size={14} color="white" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
