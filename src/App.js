import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
    const fetchTasks = async () => {
        try {
            const response = await axios.get("http://localhost:8000/tasks");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchTasks();
    }, []);
}

export default App;
