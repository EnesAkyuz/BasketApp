import styles from "./Listing.module.css"
import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button } from '@chakra-ui/react'


export default function Listing(props){
    return (
        <Card width='235px' height='400px' padding='0'>
            <CardBody>
                <Image src="https://www.allrecipes.com/thmb/JPQcpUKRsPXhUZm0H-XZUpjrp8w=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg"
                    alt="product image"
                />

                <Stack>
                    <Heading size='xs' > Pasta </Heading>
                    <Text fontSize='sm'>My special recipe of pasta and cheese only for my folks around. Contains CHE</Text>
                </Stack>

                <Divider />

                <Stack>
                    <Flex alignItems='center'  gap='2px'>
                        <Text as='b' >Distance: </Text>
                        <Text fontSize='sm'>7 minutes walk</Text>
                    </Flex>

                    <Flex  alignItems='center' gap='2px'>
                        <Text as='b' fontSize='medium'>Owner: </Text>
                        <Text fontSize='sm'>Ian Wafula</Text>
                    </Flex>
                </Stack>

                <Button width='100%'>Claim</Button>
            </CardBody>
        </Card>
    )
}
