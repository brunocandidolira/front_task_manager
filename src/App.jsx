import "./App.scss";
import Tasks from "./components/Tasks";
import Sidebar from "./components/sidebar";
function App() {
    return (
        <div className="app-container">
            <Sidebar />
            <Tasks />
        </div>
    );
}
export default App;
