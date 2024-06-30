import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button, Icon } from '@chakra-ui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShop, faBasketShopping, faPerson, faCog, faBell} from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'

export default function MenuComponent() {

    const [active, setActive] = useState("Home")


    const menuItem = (name, icon) => {
        return (
            <Flex gap='20px' alignItems='center' width='80%' >
            <Box height='44px' width='44px' textAlign='center' alignContent='center' borderRadius='15px' bg={active==name ? "#C41116" : "white"}

                _hover={{
                    backgroundColor: "#C41116",
                }}
            >
                <FontAwesomeIcon color={active==name ? "white" : "black"} icon={icon}/>
            </Box>
            <Text fontSize='larger'>{name}</Text>
        </Flex>
        )

    }


    return (
        <Stack height='50%' width='100%' alignItems='center' spacing='40px'>

            {menuItem("Home", faShop)}
            {menuItem("My Basket", faBasketShopping)}
            {menuItem("Notifications", faBell)}

        </Stack>
    )
}
