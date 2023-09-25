import { Container, Stack, Heading, Button, Text, Box, Link, Wrap, WrapItem, useColorModeValue, Show, IconButton, Card, CardBody, CardHeader } from "@chakra-ui/react";
import { FaFacebookMessenger, FaFacebookSquare, FaPeopleCarry, FaTiktok } from "react-icons/fa";
import ModalSupport from "../komponenty/Modal-wsparcie";
import { RiTwitterXFill } from "react-icons/ri";
import { MainButton, SocialButton } from "../komponenty/components";
export default function Hero() {
    return (
        <>
            <Show above="md">
                <Box bgColor={useColorModeValue("brand.100", "gray.900")}>
                    <Container maxW={'5xl'}>
                        <Stack w={"100%"} as={Box} textAlign={'left'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 31 }}>
                            <Card rounded={0} p={20} boxShadow={"dark-lg"} bgImage={"./image3.jpg"} bgPosition="top"
                                bgRepeat="no-repeat" bgSize={"cover"}>
                                <CardHeader>
                                    <Heading fontWeight={400} userSelect={"none"} fontSize={{ base: '5xl', md: '6xl' }} color={"white"} mb={15} lineHeight={'110%'} sx={{
                                        transform: "rotate(-7deg) skewX(-7deg)"
                                    }}>POLSKA<br></br><Text as={"span"} transition={"0.2s"} _hover={{ background: "brand.100" }} sx={{ background: "brand.200", lineHeight: "1.4", paddingInline: "3" }} fontWeight={800}>DLA POKOLEŃ</Text></Heading>
                                </CardHeader>
                                <CardBody>
                                    <Stack direction={'column'} spacing={3} align={'left'} alignSelf={'center'} position={'relative'}>
                                        <Stack direction='column' align={'left'}
                                            alignSelf={'left'}>
                                            <Wrap spacing={4} justify={'left'}>
                                                <WrapItem>
                                                    <MainButton link="https://ekipalewicy.pl" icon={<FaPeopleCarry />}>Dołącz do Ekipy Lewicy</MainButton>
                                                </WrapItem>
                                                <WrapItem>
                                                    <ModalSupport></ModalSupport>
                                                </WrapItem>
                                            </Wrap>
                                        </Stack>
                                        <Wrap spacing={2} justify={'left'}>
                                            <SocialButton link={'https://m.me/112361920273367'} icon={<FaFacebookMessenger />} />
                                            <SocialButton link={'https://tiktok.com/@orzechowski_mat'} icon={<FaTiktok />} />
                                            <SocialButton link={'https://www.facebook.com/orzechowski.mat'} icon={<FaFacebookSquare />} />
                                            <SocialButton link={'https://x.com/orzechowski_mat'} icon={<RiTwitterXFill />} />
                                        </Wrap>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </Stack>
                    </Container>
                </Box>
            </Show>
            <Show below="md">
                <Box bgImage={"./image2.jpg"} bgPosition="top" bgRepeat="no-repeat" bgSize={"cover"} py={"40%"}>
                    <Container maxW={'4xl'}>
                        <Stack w={"100%"} as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} pt={{ base: 20, md: 36 }} mt={"50%"}>
                            <Heading color={"white"} userSelect={"none"} fontSize={{ base: '5xl', md: '6xl' }} fontWeight={400} mb={15} sx={{
                                transform: "rotate(-7deg) skewX(-7deg)"
                            }}>POLSKA<br></br><Text as={"span"} transition={"0.2s"} _hover={{ background: "brand.100", transition: "0.2s" }} sx={{ background: "brand.200", lineHeight: "1", paddingInline: "3" }} fontWeight={800}>DLA POKOLEŃ</Text></Heading>
                            <Stack direction={'column'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
                                <Stack direction='column' align={'bottom'} alignSelf={'center'}>
                                    <Wrap spacing={4} justify={'center'}>
                                        <WrapItem>
                                        <MainButton link="https://ekipalewicy.pl" icon={<FaPeopleCarry />}>Dołącz do Ekipy Lewicy</MainButton>
                                        </WrapItem>
                                        <WrapItem>
                                            <ModalSupport />
                                        </WrapItem>
                                    </Wrap>
                                </Stack>
                                <Wrap spacing={2} justify={'left'}>
                                    <SocialButton link={'https://m.me/112361920273367'} icon={<FaFacebookMessenger />} />
                                    <SocialButton link={'https://tiktok.com/@orzechowski_mat'} icon={<FaTiktok />} />
                                    <SocialButton link={'https://www.facebook.com/orzechowski.mat'} icon={<FaFacebookSquare />} />
                                    <SocialButton link={'https://x.com/orzechowski_mat'} icon={<RiTwitterXFill />} />
                                </Wrap>
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
            </Show>
        </>
    )
}