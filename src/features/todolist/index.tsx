import { Box, Heading } from "@chakra-ui/react"
import AddTodoList from "./AddListTodo";
import ListTodoList from "./ListToDo";

const TodoListApp = () => {
    return (<>
        <Box p={4}>
            <Heading>Aplikasi TodoList</Heading>
            <Box my={3}>
                <AddTodoList />
            </Box>
            <Box my={3}>
                <ListTodoList />
            </Box>
        </Box>
    </>);
};

export default TodoListApp;