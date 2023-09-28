import { Box, Heading } from "@chakra-ui/react";
import AddTasks from "./AddTask";
import ListTasks from "./ListTask";

const Tasks = () => {
    return (
        <>
            <Box p={6}>
                <Heading>CRUD Tasks</Heading>
                <Box my={4}>
                    <AddTasks />
                </Box>
                <Box my={4}>
                    <ListTasks />
                </Box>
            </Box>
        </>
    )
};

export default Tasks;