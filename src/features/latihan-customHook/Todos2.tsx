import useTodos from "../../hooks/useTodos";

const Todos2 = () => {
    const { data } = useTodos();
    return (
        <>
            <h2>Todos 1</h2>
            <ol>
                {data.map((item) => (
                    <li key={item.id} style={{ marginBottom: 10 }}>
                        {item.title}
                    </li>
                ))}
            </ol>
        </>
    );
};

export default Todos2;