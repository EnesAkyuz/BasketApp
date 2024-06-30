
import { Alert, Input, InputGroup, InputRightElement, Spacer, useDisclosure } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faLocation, faUser } from "@fortawesome/free-solid-svg-icons";

import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

import {getDatabase, onValue, ref, set} from "firebase/database"


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

import { useState } from "react";

import Cookies from "universal-cookie"

export default function AuthModal () {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [show, setShow] = useState(false)

    const [emailValue, setEmailValue] = useState("")
    const [passValue, setPassValue] = useState("")

    const [userEmail, setUserEmail] = useState("Guest")

    const cookies = new Cookies(null, {path: "/"})


    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_KEY,
        authDomain: "basket-b5fb8.firebaseapp.com",
        projectId: "basket-b5fb8",
        storageBucket: "basket-b5fb8.appspot.com",
        messagingSenderId: "454921763756",
        appId: "1:454921763756:web:053228c03e3bf0ed87d809",
        databaseURL: "https://basket.firebaseio.com"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app)

    const user = ref(database, 'users/DAFx8RuDWpNrEBxNrYWE');
    onValue(user, (snapshot)=>{
        const data = snapshot.val()
        console.log(data)
    })

    const handleSignup = () => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, emailValue, passValue)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    setUserEmail(user.email)
                    cookies.set('currentUser', {"id": user.uuid, "email": user.email, "key": null})
                }
            })
            .catch((error) => {
                console.log(error)
                alert("invalid signup details")
            });

    }

    const handleLogin = () => {
        const auth = getAuth();
        console.log(passValue, emailValue)
        signInWithEmailAndPassword(auth, emailValue, passValue)
            .then((userCredential) => {
                const user = userCredential.user
                if (user) {
                    setUserEmail(user.email)
                    cookies.set('currentUser', {"id": user.uuid, "email": user.email, "key": null})
                }
            })
            .catch((error) => {

                alert("invalid login details!")
            })
    }

    return (
        <Flex onClick={()=>{}}
            cursor={'pointer'}
        >
            <FontAwesomeIcon icon={faUser} color="#C41116"
                onClick={onOpen}
            />
            <Text>{userEmail}</Text>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login or Signup</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input placeholder='enter email address' size='lg' marginBottom={'20px'}
                            onInput={(e)=>{setEmailValue(e.target.value)}}
                        />
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                onInput={(e)=>{setPassValue(e.target.value)}}
                            />
                            <InputRightElement width='4.5rem'                     >
                                <Button h='1.75rem' size='sm' onClick={()=> {setShow(!show)}} >
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </ModalBody>

                    <ModalFooter alignItems={'center'} >
                        <Button onClick={handleLogin} >
                            Login
                        </Button>

                        <Button  onClick={handleSignup} variant='ghost'>Signup</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}
