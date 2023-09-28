import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Icon,
  Text,
  Heading
} from "@chakra-ui/react";
import { BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs"
import { useLazyGetTasksQuery } from "../../stores/api/taskApi";
import { useEffect } from "react";
import EditTasks from "./EditTask";
import DeleteTasks from "./DeleteTask";

const ListTasks = () => {
  const [getTask, { data, isFetching, isLoading, isSuccess }] = useLazyGetTasksQuery();
  // useEffect untuk melakukan hit api
  useEffect(() => {
    getTask();
  }, [])
  return (
    <>
      <Box my={3}>
        {
          isFetching && <Heading>Loading...</Heading> //Tampilan Loading 
        }
        {data?.map((item, index) => (
          <Card key={index} my={4}>
            <CardBody>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text>{item.task_name}</Text>
                <Text>{item.task_description}</Text>
                <ButtonGroup>
                  <EditTasks id={item.id}/>
                  <DeleteTasks id={item.id}/>
                </ButtonGroup>
              </Flex>
            </CardBody>
          </Card>
        ))}
      </Box>
    </>
  )
};

export default ListTasks;