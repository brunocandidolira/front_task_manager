import { useState, useEffect, useRef, useCallback } from "react";
import "./tasks.scss";
import axios from "axios";
import TaskItem from "./TasksItem";
import AddTask from "./AddTask";
import { toast } from "react-toastify";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const lastTasksRef = useRef(null);

    const fetchTasks = useCallback(async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");
            setTasks(data);
        } catch (_error) {
            toast.error("nenhuma tarefa encontrada!!");
        }
    }, []);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    useEffect(() => {
        if (lastTasksRef.current) {
            lastTasksRef.current.scrollTop = 0;
        }
    }, [tasks]);

    return (
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>

            {/* ÚLTIMAS TAREFAS */}
            <div className="last-tasks">
                <h3>Últimas Tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />

                <div className="tasks-list" ref={lastTasksRef}>
                    {tasks
                        .filter((task) => !task.isCompleted)
                        .slice()
                        .reverse()
                        .map((task) => (
                            <TaskItem
                                key={task._id}
                                task={task}
                                fetchTasks={fetchTasks}
                            />
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
                            <TaskItem
                                key={task._id}
                                task={task}
                                fetchTasks={fetchTasks}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
