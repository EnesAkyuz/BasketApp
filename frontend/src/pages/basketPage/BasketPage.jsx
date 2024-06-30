import React from "react";
import styles from "./BasketPage.module.css"
import Listing from "../../components/listingCard/Listing.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import BasketSidebar from '../../components/basketSidebar/basketSideBar.jsx'
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button } from '@chakra-ui/react'

export default function NotificationsPage (props) {

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

                <Flex>
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
