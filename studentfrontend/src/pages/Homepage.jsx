import { useState } from "react";

const HomePage = () => {
    //hook for getting students data
    const [students, setStudents] = useState([]);
    //hook for loading state
    const [loading, setLoading] = useState(false);
    //hook for error handling
    const [error, setError] = useState(null);
    return (
        <div>
            <h1>Homepage</h1>
        </div>
    )
}
export default HomePage;