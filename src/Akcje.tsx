import { Box, Container, Flex, Heading, Image, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function Akcje() {
    return (
        <Box>
            <Container maxW={'5xl'} py={12}>
                <Heading mb={4} fontWeight={"bold"} id='dzialania' color={useColorModeValue("brand.100", "gray.000")}>Moje działania</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Flex boxShadow={"dark-lg"}>
                        <Image alt={'Mateusz Orzechowski'} src={'/image1.jpeg'} objectFit={'cover'} />
                    </Flex>
                    <Stack spacing={4}>
                        <Text fontSize={"2xl"} fontWeight={"bold"} color={useColorModeValue("brand.100", "gray.000")}>
                            Okrągłe Stoły Wokół Zdrowia Psychicznego
                        </Text>
                        <Text color={useColorModeValue("black", "gray.300")} fontSize={'lg'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum minus fugit tempora quae quaerat officia pariatur? Atque ipsam facere dolorem aspernatur accusamus eos cum maxime, praesentium earum laborum a? Tempore a quidem hic accusamus mollitia voluptas assumenda. Autem illo cupiditate sapiente facere reprehenderit maxime nihil assumenda quae vero adipisci unde deserunt eius laboriosam, corrupti perspiciatis, alias in beatae odit laudantium.
                        </Text>
                    </Stack>
                    <Flex boxShadow={"dark-lg"}>
                        <Image alt={'Mateusz Orzechowski'} src={'/image1.jpeg'} objectFit={'cover'} />
                    </Flex>
                    <Stack spacing={4}>
                        <Text fontSize={"2xl"} fontWeight={"bold"} color={useColorModeValue("brand.100", "gray.000")}>
                            Okrągłe Stoły Wokół Zdrowia Psychicznego
                        </Text>
                        <Text color={useColorModeValue("black", "gray.300")} fontSize={'lg'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum minus fugit tempora quae quaerat officia pariatur? Atque ipsam facere dolorem aspernatur accusamus eos cum maxime, praesentium earum laborum a? Tempore a quidem hic accusamus mollitia voluptas assumenda. Autem illo cupiditate sapiente facere reprehenderit maxime nihil assumenda quae vero adipisci unde deserunt eius laboriosam, corrupti perspiciatis, alias in beatae odit laudantium.
                        </Text>
                    </Stack>
                    <Flex boxShadow={"dark-lg"}>
                        <Image alt={'Mateusz Orzechowski'} src={'/image1.jpeg'} objectFit={'cover'} />
                    </Flex>
                    <Stack spacing={4}>
                        <Text fontSize={"2xl"} fontWeight={"bold"} color={useColorModeValue("brand.100", "gray.000")}>
                            Okrągłe Stoły Wokół Zdrowia Psychicznego
                        </Text>
                        <Text color={useColorModeValue("black", "gray.300")} fontSize={'lg'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum minus fugit tempora quae quaerat officia pariatur? Atque ipsam facere dolorem aspernatur accusamus eos cum maxime, praesentium earum laborum a? Tempore a quidem hic accusamus mollitia voluptas assumenda. Autem illo cupiditate sapiente facere reprehenderit maxime nihil assumenda quae vero adipisci unde deserunt eius laboriosam, corrupti perspiciatis, alias in beatae odit laudantium.
                        </Text>
                    </Stack>
                    <Flex boxShadow={"dark-lg"}>
                        <Image alt={'Mateusz Orzechowski'} src={'/image1.jpeg'} objectFit={'cover'} />
                    </Flex>
                    <Stack spacing={4}>
                        <Text fontSize={"2xl"} fontWeight={"bold"} color={useColorModeValue("brand.100", "gray.000")}>
                            Okrągłe Stoły Wokół Zdrowia Psychicznego
                        </Text>
                        <Text color={useColorModeValue("black", "gray.300")} fontSize={'lg'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum minus fugit tempora quae quaerat officia pariatur? Atque ipsam facere dolorem aspernatur accusamus eos cum maxime, praesentium earum laborum a? Tempore a quidem hic accusamus mollitia voluptas assumenda. Autem illo cupiditate sapiente facere reprehenderit maxime nihil assumenda quae vero adipisci unde deserunt eius laboriosam, corrupti perspiciatis, alias in beatae odit laudantium.
                        </Text>
                    </Stack>
                    <Flex boxShadow={"dark-lg"}>
                        <Image alt={'Mateusz Orzechowski'} src={'/image1.jpeg'} objectFit={'cover'} />
                    </Flex>
                    <Stack spacing={4}>
                        <Text fontSize={"2xl"} fontWeight={"bold"} color={useColorModeValue("brand.100", "gray.000")}>
                            Okrągłe Stoły Wokół Zdrowia Psychicznego
                        </Text>
                        <Text color={useColorModeValue("black", "gray.300")} fontSize={'lg'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum minus fugit tempora quae quaerat officia pariatur? Atque ipsam facere dolorem aspernatur accusamus eos cum maxime, praesentium earum laborum a? Tempore a quidem hic accusamus mollitia voluptas assumenda. Autem illo cupiditate sapiente facere reprehenderit maxime nihil assumenda quae vero adipisci unde deserunt eius laboriosam, corrupti perspiciatis, alias in beatae odit laudantium.
                        </Text>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}