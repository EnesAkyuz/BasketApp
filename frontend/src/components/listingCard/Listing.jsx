import styles from "./Listing.module.css"
import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button, Spacer } from '@chakra-ui/react'

import Cookies from "universal-cookie"

import {WalletProvider, MyComponent1, MyComponent2, MyComponent3, MyComponent4} from "../../components/walletcomp/walletstuff.tsx";
import {BuyButton} from "../../components/walletcomp/buybutton.tsx";
import {ClaimRewardButton} from "../../components/walletcomp/rewardbutton.tsx";


import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

import {getDatabase, onValue, ref, set} from "firebase/database"
import { getDoc, getFirestore, setDoc, collection,doc, addDoc, getDocs  } from "firebase/firestore";

export default function Listing(props){

    const cookies = new Cookies(null, {path: "/"});

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


    // console.log(props.data.owner, cookies.get("currentUser"))


    return (
        <Card width='235px' height='400px' padding='0'>
            <CardBody>
                <Image src={props.data.imageUrl}
                    height={'200px'}
                    width={'200px'}
                    alt="product image"
                />

                <Stack height="100px">
                    <Heading size='xs' > {props.data.title} </Heading>
                    <Text fontSize='sm'> {props.data.desc} </Text>
                </Stack>

                <Divider />

                <Stack>
                    {/* <Flex alignItems='center'  gap='2px'>
                        <Text as='b' >Distance: </Text>
                        <Text fontSize='sm'>7 minutes walk</Text>
                    </Flex> */}

                    <Flex  alignItems='center' gap='2px'>
                        <Text as='b' fontSize='medium'>Owner: </Text>
                        <Text fontSize='sm'>{props.data.owner} </Text>
                    </Flex>
                </Stack>

                {
                    (cookies.get('currentUser').email != props.data.owner) && (
                        <WalletProvider>
                            <Button width='100%'
                                onClick={()=>{
                                    cookies.set('currentItem', {"item": "this item"})
                                }}
                            ><BuyButton recipient={props.data.user} price={parseFloat(props.data.price)} token={"B3TR"} foodItem={"lmao"}></BuyButton></Button>


                            <Button width='100%'
                                onClick={()=>{
                                    cookies.set('currentItem', {"item": "this item"})
                                }}
                            >
                                <ClaimRewardButton rewardAddress={props.data.user} amount={1} token={"B3TR"}></ClaimRewardButton>
                            </Button>

                        </WalletProvider>
                    )
                }




            </CardBody>
        </Card>
    )
}
