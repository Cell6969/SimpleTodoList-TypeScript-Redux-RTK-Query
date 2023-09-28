import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import FormTodoList from "./FormToDoList";

const AddTodoList = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add new todo list</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormTodoList onSuccess={onClose}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Button onClick={onOpen}>Tambah List</Button>
        </>
    )
}


export default AddTodoList;