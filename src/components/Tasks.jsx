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
            console.log(data);
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas Tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="tasks-list"></div>

                {tasks
                    .filter((task) => task.isCompleted === false)
                    .map((lastTask) => (
                        <TaskItem task={lastTask} />
                    ))}
            </div>

            <div className="completed-tasks">
                <h3>Tarefas concluídas</h3>

                {tasks
                    .filter((task) => task.isCompleted === true)
                    .map((completedTask) => (
                        <TaskItem task={completedTask} />
                    ))}
                <div className="tasks-list"></div>
            </div>
        </div>
    );
};

export default Tasks;
