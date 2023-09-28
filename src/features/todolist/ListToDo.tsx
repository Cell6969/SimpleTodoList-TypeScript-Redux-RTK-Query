import { todoState } from "../../state/todoState";
import { useRecoilState } from "recoil";
import { Card, CardBody, Button, Flex, Text } from "@chakra-ui/react"

const ListTodoList = () => {
    const [listTodoList, setListTodoList] = useRecoilState(todoState)
    const handleDeleteList = (index: number) => {
        const listItem = [...listTodoList]
        listItem.splice(index, 1)
        setListTodoList(listItem)
    }
    return (
        <>
            {listTodoList.map((item, index) => (
                <Card key={index} my={3}>
                    <CardBody>
                        <Flex justifyContent={"space-between"} alignItems={"center"}>
                            <Text>{item.title}</Text>
                            <Button bg={"red.400"} color={"white"} onClick={()=>{
                                handleDeleteList(index);
                            }}>Delete</Button>
                        </Flex>
                    </CardBody>
                </Card>
            ))}
        </>
    )
};

export default ListTodoList;