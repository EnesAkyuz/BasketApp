import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button, Icon } from '@chakra-ui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShop, faBasketShopping, faPerson, faCog} from "@fortawesome/free-solid-svg-icons"

export default function MenuComponent() {
    return (
        <Stack height='50vh' width='100%' alignItems='center' spacing='40px'>
            <Flex gap='20px' alignItems='center' width='80%' >
                <Box height='44px' width='44px' textAlign='center' alignContent='center' borderRadius='15px' bg='#C41116'>
                    <FontAwesomeIcon color='white' icon={faShop}/>
                </Box>
                <Text fontSize='larger'>Home</Text>
            </Flex>

            <Flex gap='20px' alignItems='center'  width='80%' >
                <Box height='44px' width='44px' textAlign='center' alignContent='center' borderRadius='15px' border='2px solid black' >
                    <FontAwesomeIcon color='black' icon={faBasketShopping}/>
                </Box>
                <Text fontSize='larger'>My Basket</Text>
            </Flex>

            <Flex gap='20px' alignItems='center'  width='80%' >
                <Box height='44px' width='44px' textAlign='center' alignContent='center' borderRadius='15px' border='2px solid black' >
                    <FontAwesomeIcon color='black' icon={faPerson}/>
                </Box>
                <Text fontSize='larger'>My Profile</Text>
            </Flex>

            <Flex gap='20px' alignItems='center'  width='80%' >
                <Box height='44px' width='44px' textAlign='center' alignContent='center' borderRadius='15px' border='2px solid black' >
                    <FontAwesomeIcon color='black' icon={faCog}/>
                </Box>
                <Text fontSize='larger'>Settings</Text>
            </Flex>
        </Stack>
    )
}
