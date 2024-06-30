import React, { useState, useEffect } from "react";
import styles from "./Home.module.css"
import Listing from "../../components/listingCard/Listing";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import ShareCard from "../../components/shareCard/shareCard.jsx";
import AuthModal from "../../components/authModal/authModal.jsx"

import { Input, InputGroup, InputLeftElement, useDisclosure } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faLocation, faUser } from "@fortawesome/free-solid-svg-icons";

import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button } from '@chakra-ui/react'
import BasketSidebar from '../../components/basketSidebar/basketSideBar.jsx'
import { Navigate } from "react-router-dom";
import {WalletProvider, MyComponent1, MyComponent2, MyComponent3, MyComponent4} from "../../components/walletcomp/walletstuff.tsx";
import {BuyButton} from "../../components/walletcomp/buybutton.tsx";
import {ClaimRewardButton} from "../../components/walletcomp/rewardbutton.tsx";


import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

import {getDatabase, onValue, query, ref, set} from "firebase/database"

import { getDoc, getFirestore, setDoc, collection,doc, addDoc, getDocs, QuerySnapshot  } from "firebase/firestore";

export default function Home (props) {

    const [navNotifications, setNavNotifications] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [user, setUser] = useState(null)
    const [allListings, setAllListings] = useState([])


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


    useEffect(()=> {
        async function fetchData() {
            const q = query(collection(database, 'listing'))
            const queryListings = await getDocs(q)

            let allFetchedListings = []

            queryListings.forEach((doc) => {
                // setAllListings((prev) => {return [...prev, doc.data()]})
                allFetchedListings = [...allFetchedListings, doc.data()]
            })

            setAllListings(allFetchedListings)
        }

        fetchData()
    },[])



    return (
        <div className={styles.homepage}>

            {
                navNotifications && (
                    <Navigate to="notifications" />
                )
            }

            <div className={styles.sidebar}>
                <Sidebar />
            </div>

            <div className={styles.topbar}>
                <InputGroup width='80%' borderRadius='20px'>
                    <InputLeftElement pointerEvents='none'>
                        <FontAwesomeIcon icon={faLocation} color="#C41116" />
                    </InputLeftElement>

                    <Input type="text" placeholder="search location" />
                </InputGroup>

                <AuthModal />

                <WalletProvider>
                    <MyComponent1 />
                </WalletProvider>

                <FontAwesomeIcon icon={faBell} color="#C41116"
                    onClick={()=> {
                        console.log("clicked")
                        setNavNotifications(true)
                    }}
                />
            </div>

            <div className={styles.share}>
                <Text fontSize='large' padding='0 40px 20px 40px'>Share a meal and much more</Text>

                <Flex gap='20px' width='100%' padding='0 40px 0 40px' >
                    <ShareCard text="Snacks" emoji="🍿" />
                    <ShareCard text="Veggies" emoji="🥬" />
                    <ShareCard text="Meals" emoji="🍜"/>
                    <ShareCard text="Desserts" emoji="🍰"/>
                    <ShareCard text="Items" emoji="🥫"/>
                </Flex>

            </div>

            <div className={styles.listings}>
                <Text fontSize='large' padding='20px 40px 0 40px'>All Listings</Text>

                <Flex padding='0 40px 0 40px' flexWrap='wrap' gap={'20px'} >
                    {allListings.map((listing) => {
                        return (
                            <Listing key={listing.index} data={listing} />
                        )
                    })}


                </Flex>

            </div>

            <div className={styles.basket}>
            {/* <WalletProvider>
                <MyComponent1 />
                <MyComponent2 />
                <MyComponent3 />
                <MyComponent4 />
                            <BuyButton recipient={"0xc3b0651ec69b6802340feec23be02c0a5edc273f"} price={1} token={"B3TR"} foodItem={"lmao"}></BuyButton>
                            <ClaimRewardButton rewardAddress={"0xc3b0651ec69b6802340feec23be02c0a5edc273f"} amount={1} token={"B3TR"}></ClaimRewardButton>
                </WalletProvider> */}
                <BasketSidebar />
            </div>

        </div>
    )
}
