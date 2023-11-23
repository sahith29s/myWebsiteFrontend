import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { baseUrl } from "../backendBaseUrl";
import { useNavigate } from "react-router-dom";

export default function SimpleCard() {
    const toast = useToast();

    interface formDataInterface {
        email: string,
        password: string
    }

    const defaultFormData = {
        email: "",
        password: ""
    }

    useEffect(() => {
        if (localStorage.getItem("formData")) {
            toast({
                title: "Logged in",
                description: "You have already logged in",
                status: "info",
                position: "bottom-left",
                duration: 9000,
                isClosable: true,
            })
            history("/")
        }
    }, [])


    const history = useNavigate();
    const [formData, setFormData] = useState<formDataInterface>(defaultFormData);

    const submitForm = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let response = await fetch((baseUrl + "api/user/login"), {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(formData),
        });
        setFormData(defaultFormData);

        if (response.status == 200) {
            toast({
                title: "Success",
                description: "User logged in successfully",
                status: "success",
                position: "bottom-left",
                duration: 9000,
                isClosable: true,
            })
            let data = await response.json();

            localStorage.setItem("formData", JSON.stringify(data));
            history("/");
            return;
        }
        else if (response.status == 404) {
            toast({
                title: "Error",
                description: "User doesn't exists",
                status: "error",
                position: "bottom-left",
                duration: 9000,
                isClosable: true,
            })
            return;
        }
        else {
            toast({
                title: "Error",
                description: "Some error occurred",
                status: "error",
                position: "bottom-left",
                duration: 9000,
                isClosable: true,
            })
            return;
        }

    };

    // let response = await fetch((baseUrl + "api/user/register"), {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json", },
    //     body: JSON.stringify(formData),
    // });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Login to your account</Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input name="email" value={formData.email} onChange={handleInputChange} type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input name="password" onChange={(e) => handleInputChange(e)} value={formData.password} type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: "column", sm: "row" }}
                                align={"start"}
                                justify={"space-between"}>
                                <Checkbox>Remember me</Checkbox>
                                <Text color={"blue.400"}>Forgot password?</Text>
                            </Stack>
                            <Button
                                bg={"blue.400"}
                                onClick={(e) => submitForm(e)}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}>
                                Login
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}