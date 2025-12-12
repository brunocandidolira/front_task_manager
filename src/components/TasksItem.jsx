const TaskItem = ({ task }) => {
    return (
        <>
            <h1> {task.description}</h1>
            <p>{task.isCompleted ? "completa" : "não completa"}</p>
        </>
    );
};
export default TaskItem;
