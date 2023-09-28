import {
    Button,
    Card,
    CardBody,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { todoState } from "../../state/todoState";
import { todolist } from "../../model/TodoList";
import { useSetRecoilState } from "recoil"
import { FC, useState } from "react";

interface Props {
    onSuccess: () => void
};

const FormTodoList: FC<Props> = ({ onSuccess }) => {
    const setState = useSetRecoilState(todoState);
    const [form, setForm] = useState<todolist>({ title: "" });
    const handleSubmit = () => {
        setState((s) => [...s, form]);
        onSuccess();

    };
    return (
        <>
            <Card>
                <CardBody>
                    <FormControl>
                        <FormLabel>Title</FormLabel>
                        <Input
                            placeholder="Masukkan list ..."
                            value={form.title}
                            onChange={(e) => {
                                setForm((f) => {
                                    return {
                                        ...f,
                                        title: e.target.value
                                    }
                                })
                            }}
                        />
                    </FormControl>
                    <Button onClick={handleSubmit} mt={4} backgroundColor="green.300">Tambahkan</Button>
                </CardBody>
            </Card>
        </>
    )
};

export default FormTodoList;