import React, { useState, useEffect } from "react";

import "./App.css";
import api from "./services/api";
import Header from "./components/Header";

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get("projects").then((response) => {
            setProjects(response.data);
        });
    }, []);

    async function handleClickAddProject() {
        const response = await api.post("projects", {
            title: `New project ${Date.now()}`,
            owner: "Lucas",
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Homepage" />
            <ul>
                {projects.map((project) => {
                    return <li key={project.id}>{project.title}</li>;
                })}
            </ul>
            <button type="button" onClick={handleClickAddProject}>
                Adicionar projeto
            </button>
        </>
    );
}

export default App;
