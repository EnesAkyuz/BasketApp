
import { Alert, Input, InputGroup, InputRightElement, Spacer, useDisclosure } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faLocation, faUser } from "@fortawesome/free-solid-svg-icons";

import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

import {getDatabase, onValue, ref, set} from "firebase/database"

import { getDoc, getFirestore, setDoc, collection,doc, addDoc, getDocs  } from "firebase/firestore";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

import { useEffect, useState } from "react";

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
        appId: "1:454921763756:web:053228c03e3bf0ed87d809"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getFirestore(app)

    const usersRef = collection(database, "users")

    const handleSignup = async () => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, emailValue, passValue)
            .then(async (userCredential) => {
                const user = userCredential.user;
                if (user) {
                    setUserEmail(user.email)

                    // const usersRef = collection(database, "users")
                    // const newUser = doc(database, 'users', user.uuid);

                    const data = {
                        "address" : "",
                        "email": user.email,
                    }

                    const newUser = await setDoc(doc(database, 'users', user.uid), data);

                    cookies.set('currentUser', {"id": user.uid, "email": user.email, "key": null} )
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
            .then(async (userCredential) => {
                const user = userCredential.user
                if (user) {
                    setUserEmail(user.email)

                    const userMatch = await getDoc(doc(usersRef, user.uid))
                    cookies.set('currentUser', {"id": user.uuid, "email": user.email, "key": userMatch.data().address})
                }
            })
            .catch((error) => {
                console.log(error)
                alert("invalid login details!")
            })
    }

    useEffect(()=> {
        setUserEmail(cookies.get('currentUser').email)
    }, cookies.get('currentUser'))

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
