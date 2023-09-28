import {
    Button,
    Card,
    CardBody,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Flex
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";

interface User {

    email: string;
    password: string;
}
const ContohForm = () => {
    const defaultState: User = {
        email: "",
        password: "",
    };

    const [form, setForm] = useState<User>(defaultState);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("form", form);
    };
    return (
        <>
            <Card>
                <CardBody>
                    <form onSubmit={handleSubmit}>

                        <FormControl mb={4}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                onChange={(e) => {
                                    setForm((f) => {
                                        return {
                                            ...f,
                                            email: e.target.value,
                                        };
                                    });
                                }}
                                placeholder="Your Email ..."
                            />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                onChange={(e) => {
                                    setForm((f) => {
                                        return {
                                            ...f,
                                            password: e.target.value,
                                        };
                                    });
                                }}
                                placeholder="Your Password ...."
                            />
                        </FormControl>
                        <Flex justifyContent='center'>
                            <Button type="submit" width={100}>Login</Button>
                            <Button type="submit" backgroundColor="blue.400" marginLeft={10} width={100}>
                                SignUp
                            </Button>
                        </Flex>
                    </form>
                </CardBody>
            </Card>
        </>
    );
};

export default ContohForm;