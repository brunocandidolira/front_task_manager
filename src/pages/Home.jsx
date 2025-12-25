import "./Home.scss";

import Sidebar from "../components/sidebar";
import Tasks from "../components/Tasks";

const Home = () => {
    return (
        <div className="home-container">
            <Sidebar />
            <Tasks />
        </div>
    );
};
export default Home;
