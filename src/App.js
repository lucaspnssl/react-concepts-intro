import React, { useState } from "react";

import Header from "./components/Header";

function App() {
    const [ projects, setProjects ] = useState(["Desenvolvimento de app", "Front-end web"]);

    function handleClickAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Homepage" />
            <ul>
                {projects.map((project, index) => {
                    return <li key={index}>{project}</li>;
                })}
            </ul>
            <button type="button" onClick={handleClickAddProject}>
                Adicionar projeto
            </button>
        </>
    );
}

export default App;
