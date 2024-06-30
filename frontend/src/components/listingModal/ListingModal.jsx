
import { Alert, Input, InputGroup, InputRightElement, Select, Spacer, useDisclosure } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell,faPlus,  faLocation, faUser } from "@fortawesome/free-solid-svg-icons";

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


import { useState } from "react";

import Cookies from "universal-cookie";

export default function ListingModal (props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [show, setShow] = useState(false)

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [expiry, setExp] = useState(null)
    const [imageUrl, setImageUrl] = useState("https://www.allrecipes.com/thmb/QiGptPjQB5mqSXGVxE4sLPMJs_4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-269500-creamy-garlic-pasta-Beauties-2x1-bcd9cb83138849e4b17104a1cd51d063.jpg")
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState("")

    const cookies = new Cookies(null, {path: "/"})

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



    const handleClick = async () => {

        onClose()

        const data = {
            "title" : title,
            "desc" : desc,
            "expiry" : expiry,
            "imageUrl" : imageUrl,
            "price" : price,
            "category" : category,
            "user" : cookies.get('currentUser').key,
            "owner" : cookies.get('currentUser').email,
        }

        if (data.user) {
            try{
                const newListing = await addDoc(collection(database, 'listing'), data)
            } catch(error){
                console.log(error)
            }

        }
    }

    return (
       <>
        <FontAwesomeIcon icon={faPlus} color="#C41116"
            onClick={onOpen}
        />


        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add new Listing</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <Stack>
                        <Input placeholder='enter listing title' size='lg' marginBottom={'20px'}
                                onInput={(e)=>{setTitle(e.target.value)}}
                        />

                        <Input placeholder='enter listing description' size='lg' marginBottom={'20px'}
                                onInput={(e)=>{setDesc(e.target.value)}}
                        />

                        <Input placeholder='enter listing imageUrl' size='lg' marginBottom={'20px'}
                                onInput={(e)=>{setImageUrl(e.target.value)}}
                        />
                        <Input placeholder='enter listing price' size='lg' marginBottom={'20px'}
                                onInput={(e)=>{setPrice(e.target.value)}}
                        />

                        <Input placeholder="enter expiry date" type='date' onInput={(e)=> {setExp(e.target.value)}} />

                        <Select spacing={3} onChange={(e)=> {setCategory(e.target.value)}}>
                            <option value="Veggies">Veggies</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Meals">Meals</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Items">Items</option>
                        </Select>

                    </Stack>

                    <Button onClick={handleClick} >Add Listing</Button>

                </ModalBody>

            </ModalContent>

            <ModalFooter>

            </ModalFooter>
        </Modal>
       </>
    )
}
