import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Container, Stack, Heading, Button, Text, Box, Link, HStack, ButtonGroup, Wrap, WrapItem, useColorModeValue, Show, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaFacebookSquare, FaInstagram, FaInstagramSquare, FaTwitter, FaTwitterSquare } from "react-icons/fa";
export default function Hero() {
    return (
        <>
            <Box bgImg={"tlo.jpeg"} bgRepeat={"no-repeat"} bgPos={"center"} bgSize={"cover"}>
                <Container maxW={'3xl'}>
                    <Stack w={"100%"} as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
                        <Heading fontWeight={800} fontSize={{ base: '5xl', md: '6xl' }} lineHeight={'110%'} color={'white'} textShadow='3px 2px 15px #000000'>Witajcie na mojej stronie!</Heading>
                        <Text color={'white'} textShadow='3px 2px 15px #000000'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus commodi tenetur autem iure,
                            natus aliquam omnis adipisci voluptas consequatur reiciendis ea dolor et eveniet
                            doloribus libero a quidem quia. Consequuntur et mollitia labore tempore facere illum
                            quibusdam minima amet, dolorem tenetur fugiat nisi iusto molestiae natus quos velit nemo
                            culpa eius possimus quod? Odit a aliquam facere accusantium impedit recusandae similique
                            necessitatibus fugiat illo commodi est vero repellendus ab, assumenda libero omnis
                            qui nulla eaque alias? Numquam modi enim nemo.
                        </Text>
                        <Stack direction={'column'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
                            <Stack direction='column' align={'center'}
                                alignSelf={'center'}>
                                <Wrap spacing={4} justify={'center'}>
                                    <WrapItem>
                                        <Button variant={'solid'} size={'lg'} colorScheme={'facebook'} leftIcon={<FaFacebookSquare />}>Facebook</Button>
                                    </WrapItem>
                                    <WrapItem>
                                        <Button variant={'solid'} size={'lg'} colorScheme={'twitter'} leftIcon={<FaTwitterSquare />}>Twitter</Button>
                                    </WrapItem>
                                    <WrapItem>
                                        <Button variant={'solid'} size={'lg'} colorScheme={'pink'} leftIcon={<FaInstagramSquare />}>Instagram</Button>
                                    </WrapItem>
                                </Wrap>
                            </Stack>
                            <Button variant={'outline'} colorScheme={"messenger"} color={"white"} bgColor={"whiteAlpha.300"} _hover={{ bg: 'whiteAlpha.500' }} rightIcon={<ExternalLinkIcon />} size={'md'}>
                                <Link href={'https://m.me/112361920273367'}>Napisz na Messengerze!</Link>
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
    
        </>
    )
}