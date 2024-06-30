import { Input, InputGroup, InputLeftElement, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLocation, faX } from "@fortawesome/free-solid-svg-icons";
import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button } from '@chakra-ui/react'


export default function Request () {
    return (
        <Flex
            width='80%'
            height={'100px'}
            alignItems={'center'}
            border={'2px solid #C41116'}
            borderRadius={'9px'}
            padding={'20px'}
            backgroundColor={'#FFEBEB'}
        >
            <Flex gap={'2px'}>
                <Text fontWeight={'bold'}>Jay</Text>
                <Text>requested 'Ketchup'</Text>
            </Flex>


            <Spacer />
            <Box height={'20px'} width={'20px'} marginRight={'10px'} ><FontAwesomeIcon fontSize={'20px'} icon={faCheck} color="green" /></Box>
            <Box height={'20px'} width={'20px'} ><FontAwesomeIcon fontSize={'20px'} icon={faX} color="red" /></Box>
        </Flex>
    )
}
