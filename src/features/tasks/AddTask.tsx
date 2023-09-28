import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import FormTasks from "./FormTask";

const AddTasks = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Task:</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormTasks onSuccess={onClose}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Button onClick={onOpen}>Add Task</Button>
        </>
    )
}

export default AddTasks;