import { useEffect, useState } from "react";
import useTodos from "../../hooks/useTodos";

const Todos1 = () => {
    const { data } = useTodos();

    return (
        <>
            <h2>Todos 1</h2>
            <ul>
                {data.map((item) => (
                    <li key={item.id} style={{ marginBottom: 10 }}>{item.title}</li>
                ))}
            </ul>
        </>
    );
};

export default Todos1;