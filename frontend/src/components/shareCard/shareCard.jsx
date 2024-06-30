import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button } from '@chakra-ui/react'
import { useState } from "react";

import { Navigate, useLocation } from "react-router-dom";

export default function ShareCard (props){

    const [switchPage, setSwitchPage] = useState(false)


    return (
        <Stack width='110px' height='155px' border='2px solid black' borderRadius='20px' textAlign='center'
            _hover={{
                border: 'none',
                backgroundColor: "#C41116"
            }}

            onClick={()=>setSwitchPage(true)}
        >

            {
                switchPage && (
                    <Navigate to={`/${props.text}`} />
                )
            }
            <Text fontSize='55px'>{props.emoji}</Text>
            <Text fontSize='larger'>{props.text}</Text>
            <FontAwesomeIcon icon={faArrowRight} />
        </Stack>
    )

}
