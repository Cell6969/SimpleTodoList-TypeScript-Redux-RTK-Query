import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Button,
    Icon,
    Alert,
    AlertIcon,
    Box,
} from "@chakra-ui/react";
import FormTasks from "./FormTask";
import { BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs";
import { useLazyGetTaskQuery } from "../../stores/api/taskApi";
import { useDeleteTaskMutation } from "../../stores/api/taskApi";
import { FC } from "react";

interface Props {
    id?: number;
}
const DeleteTasks: FC<Props> = ({ id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [getTask, { data }] = useLazyGetTaskQuery();
    const [deleteTask] = useDeleteTaskMutation();

    const getTaskHandler = () => {
        if (id) {
            getTask(id).then(() => {
                onOpen();
            });
        }
    };

    const deleteHandler = () => {
        if (id) {
            deleteTask(id).then(() => {
                onClose()
            });
        }
    };
    
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete Tasks</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Alert status="warning">
                            <AlertIcon />
                            Apakah kamu ingin menghapus task {data?.task_name} ?
                        </Alert>
                        <Box mt={4} onClick={deleteHandler}>
                            <Button>Ya, Hapus</Button>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <Button
                bg={"red.400"}
                color={"white"}
                _hover={{ bg: "red/300" }}
                onClick={getTaskHandler}
            >
                <Icon as={BsFillTrash3Fill} />
            </Button>
        </>
    );
};

export default DeleteTasks;