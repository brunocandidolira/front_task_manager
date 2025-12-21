import { useState, useEffect } from "react";
import "./tasks.scss";
import axios from "axios";
import TaskItem from "./TasksItem";
import AddTask from "./AddTask";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");
            setTasks(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>

            {/* ÚLTIMAS TAREFAS */}
            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />

                <div className="tasks-list">
                    {tasks
                        .filter((task) => !task.isCompleted)
                        .slice()
                        .reverse()
                        .map((task) => (
                            <TaskItem key={task._id} task={task} />
                        ))}
                </div>
            </div>

            {/* TAREFAS CONCLUÍDAS */}
            <div className="completed-tasks">
                <h3>Tarefas concluídas</h3>

                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted)
                        .map((task) => (
                            <TaskItem key={task._id} task={task} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
