import React from "react";
import styles from "./BasketPage.module.css"
import Listing from "../../components/listingCard/Listing.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import BasketSidebar from '../../components/basketSidebar/basketSideBar.jsx'
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button } from '@chakra-ui/react'
import ListingModal from "../../components/listingModal/ListingModal.jsx";

import { useState, useEffect } from "react";

import Cookies from "universal-cookie"

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

import {getDatabase, onValue, query, ref, set} from "firebase/database"

import { getDoc, getFirestore, setDoc, collection,doc, where,  addDoc, getDocs, QuerySnapshot  } from "firebase/firestore";


export default function BasketPage (props) {

    const cookies = new Cookies(null, {path: "/"});

    const [myListings, setMyListings] = useState([])

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
            const q = query(collection(database, 'listing'), where('owner', '==', cookies.get('currentUser').email))
            const queryListings = await getDocs(q)

            let allFetchedListings = []

            queryListings.forEach((doc) => {
                // setAllListings((prev) => {return [...prev, doc.data()]})
                allFetchedListings = [...allFetchedListings, doc.data()]
            })

            setMyListings(allFetchedListings)
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

                <h1> My listings </h1>

                <ListingModal />

                <Flex>
                    {myListings.map((listing) => {
                        return (<Listing key={listing.index} data={listing} />)
                    })}

                </Flex>

            </div>

            <div className={styles.basket}>
                <BasketSidebar />
            </div>

        </div>
    )
}
