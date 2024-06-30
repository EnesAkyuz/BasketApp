import React, {useEffect, useState} from "react";
import styles from "./ListingsPage.module.css"
import Listing from "../../components/listingCard/Listing.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import ShareCard from "../../components/shareCard/shareCard.jsx";
import BasketSidebar from '../../components/basketSidebar/basketSideBar.jsx'
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button } from '@chakra-ui/react'

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

import {getDatabase, onValue, query, ref, set} from "firebase/database"

import { getDoc, getFirestore, setDoc, collection,doc, addDoc, getDocs, QuerySnapshot, where  } from "firebase/firestore";


export default function ListingsPage (props) {

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
            const q = query(collection(database, 'listing'), where('category', '==', props.list))
            const queryListings = await getDocs(q)

            let allFetchedListings = []

            queryListings.forEach((doc) => {
                // setAllListings((prev) => {return [...prev, doc.data()]})
                console.log(doc.data())
                allFetchedListings = [...allFetchedListings, doc.data()]
            })

            setAllListings(allFetchedListings)
        }

        fetchData()
    },[])

    return (
        <div className={styles.homepage}>

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
            </div>

            <div className={styles.listings}>
                <Text fontSize='large' padding='20px 40px 0 40px'>Recent Listings</Text>

                <Flex padding='0 40px 0 40px' flexWrap='wrap' >
                    {allListings.map((listing) => {
                        return (
                            <Listing key={listing.index} data={listing} />
                        )
                    })}
                </Flex>

            </div>

            <div className={styles.basket}>
                <BasketSidebar />
            </div>

        </div>
    )
}
