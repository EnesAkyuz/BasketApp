import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button, Icon } from '@chakra-ui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShop, faBasketShopping, faPerson, faCog, faBell} from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import { Navigate } from 'react-router'

export default function MenuComponent() {

    const [active, setActive] = useState("Home")
    const [goHome, setGoHome] = useState(false)
    const [goBasket, setGoBasket] = useState(false)
    const [goNotifs, setGoNotifs] = useState(false)




    const menuItem = (name, icon, handleClick) => {
        return (
            <Flex gap='20px' alignItems='center' width='80%' cursor={'pointer'} >
            <Box height='44px' width='44px' textAlign='center' alignContent='center' borderRadius='15px' bg={active==name ? "#C41116" : "white"}

                _hover={{
                    backgroundColor: "#C41116",
                }}

                onClick={()=> {handleClick(true)}}
            >
                <FontAwesomeIcon color={active==name ? "white" : "black"} icon={icon}/>
            </Box>
            <Text fontSize='larger'>{name}</Text>
        </Flex>
        )

    }





    return (
        <Stack height='50%' width='100%' alignItems='center' spacing='40px'>

            {
                goHome && ( <Navigate to='/'/> )
            }

            {
                goNotifs && (<Navigate to='/notifications' />)
            }

            {
                goBasket && (<Navigate to='/basket' />)
            }

            {menuItem("Home", faShop, setGoHome)}
            {menuItem("My Basket", faBasketShopping, setGoBasket)}
            {menuItem("Notifications", faBell, setGoNotifs)}

        </Stack>
    )
}
