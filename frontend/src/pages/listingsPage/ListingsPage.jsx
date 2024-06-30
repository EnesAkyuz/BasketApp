import React from "react";
import styles from "./ListingsPage.module.css"
import Listing from "../../components/listingCard/Listing.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import ShareCard from "../../components/shareCard/shareCard.jsx";
import BasketSidebar from '../../components/basketSidebar/basketSideBar.jsx'
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button } from '@chakra-ui/react'

export default function ListingsPage (props) {

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
                    <Listing />

                    <Listing />

                    <Listing />

                    <Listing />

                    <Listing />
                </Flex>

            </div>

            <div className={styles.basket}>
                <BasketSidebar />
            </div>

        </div>
    )
}
