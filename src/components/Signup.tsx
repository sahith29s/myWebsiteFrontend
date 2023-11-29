import { baseUrl } from "../backendBaseUrl"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast,
} from "@chakra-ui/react"

import { useEffect, useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const validateEmail = (email: string) => {
        const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return pattern.test(email);
    }


    useEffect(() => {
        if (localStorage.getItem("isSignup")) {
            history("/login")
        }
    }, [])

    const history = useNavigate();

    interface formDataInterface {
        username: string,
        email: string,
        password: string
        profile: string
    }

    const defaultFormData = {
        username: "",
        email: "",
        password: "",
        profile: ""
    }

    const [formData, setformData] = useState<formDataInterface>(defaultFormData);
    const handleFormInput = (e: any) => {
        console.log(e.target.name);
        setformData({ ...formData, [e.target.name]: e.target.value });
    };

    const toast = useToast()
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [inputTagImage, setInputTagImage] = useState<File | null>(null);

    const handleToSetImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = (e.target as HTMLInputElement).files;
        // files && console.log(files[0].type);
        if (files && files[0].type != "image/jpeg" && files[0].type != "image/png") {
            toast({
                title: "photo",
                description: "Only png and jpeg files are allowed",
                status: "warning",
                position: "bottom-left",
                duration: 3000,
                isClosable: true,
            })
        }
        if (files) {
            console.log(files[0])
            setInputTagImage(files[0]);
        }
    };

    const submitForm = async (e: any) => {
        let profileString: string = "";
        if (!validateEmail(formData.email)) {
            toast({
                title: "Email",
                description: "Enter a valid email",
                status: "warning",
                position: "bottom-left",
                duration: 9000,
                isClosable: true,
            })
            return;
        }
        setIsLoading(true);

        e.preventDefault();
        console.log(inputTagImage);

        if (inputTagImage && (inputTagImage.type === "image/jpeg" || inputTagImage.type === "image/png")) {
            console.log("sahith");
            const formDataVar = new FormData()
            formDataVar.append("file", inputTagImage)
            formDataVar.append("upload_preset", "deployWebsite")
            formDataVar.append("cloud_name", "dpm6uveua")
            let cloudinaryFetch = await fetch("https://api.cloudinary.com/v1_1/dpm6uveua/image/upload", {
                method: "post",
                body: formDataVar
            })
            cloudinaryFetch = await cloudinaryFetch.json();
            profileString = cloudinaryFetch.url;
        }

        const { username, email, password } = formData;
        if (!username || !email || !password) {
            toast({
                title: "Credentials",
                description: "Enter all the credentials first",
                status: "warning",
                position: "bottom-left",
                duration: 9000,
                isClosable: true,
            })
            return;
        }

        let response = await fetch((baseUrl + "api/user/register"), {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ ...formData, profile: profileString }),
        });

        setIsLoading(false);

        if (response.status === 201) {
            toast({
                title: "Account created.",
                description: "Your account has been created",
                status: "success",
                position: "bottom-left",
                duration: 9000,
                isClosable: true,
            })
            localStorage.setItem("isSignup", "true")
            history("/login")
            return
        }

        else if (response.status == 409) {
            toast({
                title: "Account not created.",
                description: "User already exists",
                status: "error",
                position: "bottom-left",
                duration: 9000,
                isClosable: true,
            })
        }

    };

    return (

        <>
            <Flex
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}>
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"} textAlign={"center"}>
                            Sign up
                        </Heading>
                    </Stack>

                    <Box
                        rounded={"lg"}
                        bg={useColorModeValue("white", "gray.700")}
                        boxShadow={"lg"}
                        p={8}>
                        <Stack spacing={4}>
                            <form >
                                <FormControl id="username" isRequired>
                                    <FormLabel>username</FormLabel>
                                    <Input name="username" value={formData.username} onChange={(e) => handleFormInput(e)} type="message" />
                                </FormControl>

                                <FormControl id="email" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input name="email" value={formData.email} onChange={(e) => handleFormInput(e)} type="email" />
                                </FormControl>

                                <FormControl id="profile" isRequired>
                                    <FormLabel>Profile Picture <span className="text-red-500">optional</span></FormLabel>
                                    <Input placeItems="bot" name="profile" className="p-1" onChange={(e) => handleToSetImage(e)} type="file" />
                                </FormControl>

                                <FormControl id="password" isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <Input name="password" value={formData.password} onChange={(e) => handleFormInput(e)} type={showPassword ? "text" : "password"} />
                                        <InputRightElement h={"full"}>
                                            <Button
                                                variant={"ghost"}
                                                onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        onClick={(e) => submitForm(e)}
                                        isLoading={isLoading}
                                        loadingText="submitForm"
                                        size="lg"
                                        bg={"blue.400"}
                                        color={"white"}
                                        _hover={{
                                            bg: "blue.500",
                                        }}>
                                        Sign up
                                    </Button>
                                </Stack>
                            </form>


                            <Stack pt={6}>
                                <Text align={"center"}>
                                    Already a user? <Link color={"blue.400"}>Login</Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}

export default Signup