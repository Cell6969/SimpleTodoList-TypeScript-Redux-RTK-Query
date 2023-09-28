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
} from "@chakra-ui/react";
import FormTasks from "./FormTask";
import { BsPencilSquare } from "react-icons/bs";
import { FC } from "react";
import { useLazyGetTaskQuery } from "../../stores/api/taskApi";


interface Props {
    id?: number
};

const EditTasks: FC<Props> = ({ id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [getTask, { data }] = useLazyGetTaskQuery()
    const getTaskHandler = () => {
        if (id) {
            getTask(id).then(() => {
                onOpen()
            })
        }
    };
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Tasks</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormTasks onSuccess={onClose} task={data} formType="update"/>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <Button onClick={getTaskHandler}>
                <Icon as={BsPencilSquare} />
            </Button>
        </>
    );
};

export default EditTasks;