
import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button } from '@chakra-ui/react'
import MenuComponent from '../menuComponent/menuComponent'

import boots from "../../assets/boots.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShop, faBasketShopping, faPerson, faCog} from "@fortawesome/free-solid-svg-icons"

export default function Sidebar () {
    return (
        <Stack spacing="20px" alignItems='center'>

            <Flex width='80%' alignItems='center' gap='20px' paddingTop='20px'>
                <FontAwesomeIcon height='100px' fontSize='60px' color='#C41116'icon={faBasketShopping}/>
                <Text  fontSize='40px' color='#C41116'>Basket</Text>
            </Flex>

            <Image src="https://i.pinimg.com/originals/3b/ed/41/3bed41ea8eeaab4fbdc572d2a0ba9cb6.png" borderRadius='20px'  />

            <MenuComponent />


            <Flex width='80%' alignItems='center' gap='20px'>
                <Image src={boots} height='50px' width='50px' />
                <Text fontSize='larger'>log out Yalla</Text>
            </Flex>


        </Stack>
    )
}
