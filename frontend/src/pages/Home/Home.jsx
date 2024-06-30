import React, { useState } from "react";
import styles from "./Home.module.css"
import Listing from "../../components/listingCard/Listing";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import ShareCard from "../../components/shareCard/shareCard.jsx";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faLocation } from "@fortawesome/free-solid-svg-icons";
import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button } from '@chakra-ui/react'
import BasketSidebar from '../../components/basketSidebar/basketSideBar.jsx'
import { Navigate } from "react-router-dom";
import {WalletProvider, MyComponent1, MyComponent2, MyComponent3, MyComponent4} from "../../components/walletcomp/walletstuff.tsx";
import {BuyButton} from "../../components/walletcomp/buybutton.tsx";
import {ClaimRewardButton} from "../../components/walletcomp/rewardbutton.tsx";

export default function Home (props) {

    const [navNotifications, setNavNotifications] = useState(false)

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

                <Flex padding='0 40px 0 40px' flexWrap='wrap' >
                    <Listing />

                    <Listing />

                    <Listing />

                    <Listing />

                    <Listing />
                </Flex>

            </div>

            <div className={styles.basket}>
                 <WalletProvider>
          <MyComponent1 />
          <MyComponent2 />
          <MyComponent3 />
          <MyComponent4 />
                     <BuyButton recipient={"0xc3b0651ec69b6802340feec23be02c0a5edc273f"} price={1} token={"B3TR"} foodItem={"lmao"}></BuyButton>
                     <ClaimRewardButton rewardAddress={"0xc3b0651ec69b6802340feec23be02c0a5edc273f"} amount={1} token={"B3TR"}></ClaimRewardButton>
        </WalletProvider>
            </div>

        </div>
    )
}
