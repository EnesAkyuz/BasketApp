import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocation, faPerson } from "@fortawesome/free-solid-svg-icons";
import { Card, Flex, CardHeader, Box, Text ,  Image, Heading, CardBody, CardFooter, Stack, Divider, Button } from '@chakra-ui/react'

export default function BasketSideBar() {

    const iconDetail = (text, icon) => {
        return (
            <Flex width='100%' gap='10px'>
                <Box height={'30px'} width={'30px'}>
                    <FontAwesomeIcon fontSize='30px' icon={icon} color="#C41116"/>
                </Box>

                <Text fontSize='large'>{text}</Text>
            </Flex>
        )
    }


    const itemDetail = (details) => {
        return (
            <Flex width='200px' justifyContent='center' alignItems='center' gap='10px'>
                <Image height='60px' width='60px' src="https://www.allrecipes.com/thmb/JPQcpUKRsPXhUZm0H-XZUpjrp8w=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg" />
                <Stack>
                    <Text fontSize='16px' fontWeight='bold'>Fried Rice</Text>
                    <Text fontSize='12px'>Contains white rice, peas, carrots</Text>

                    <Flex>
                        <Box height={'25px'} width={'25px'} textAlign={'center'}>
                            <FontAwesomeIcon fontSize='20px' icon={faPerson} color="#C41116"/>
                        </Box>
                        <Text fontSize='12px' >Enes isSingle</Text>
                    </Flex>

                    <Flex>
                        <Box height={'25px'} width={'25px'}>
                            <FontAwesomeIcon fontSize='20px' icon={faClock} color="#C41116"/>
                        </Box>
                        <Text fontSize='12px'>9 mins ago</Text>
                    </Flex>
                </Stack>

            </Flex>
        )
    }

    return (
        <Stack spacing='50px'>
            <Text fontSize='30px'>My Claims</Text>

            <Stack width='100%' border='0 0 2px 0 solid black'>
                {iconDetail("10:50 AM", faClock)}
                {iconDetail("Minerva University", faLocation)}
                {iconDetail("by Enes isSingle", faPerson)}
            </Stack>

            {/* {itemDetail({})} */}

            {/* <h1>Rewards</h1>

            <Box w="100%" height='200px' bg="#C41116">
                <Text color={"white"}>Token Shit</Text>
            </Box>

            <Button backgroundColor={"#C41116"} color={"white"}>Confirm Basket</Button> */}

        </Stack>
    )
}
