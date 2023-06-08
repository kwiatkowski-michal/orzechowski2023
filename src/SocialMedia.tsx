import { Box, Container, Heading, SimpleGrid, SkeletonCircle, SkeletonText, Text, useColorModeValue } from "@chakra-ui/react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import {useBreakpointValue} from '@chakra-ui/react';

export default function SocialMedia() {
    return (
            <Container maxW={'5xl'} mb={10}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Box shadow={"md"} rounded={15} pt={5} px={5}>
                        <Heading fontWeight={800} pb={5}>
                            Najnowsze <Text as={'span'} position={'relative'}  _before={{ content: "''", width: "full", height: useBreakpointValue({ base: "20%", md: "30%" }), position: "absolute", bottom: 1, left: 0, bg: "blue.300", zIndex: -1 }}>tweety</Text>
                        </Heading>
                        <Box pb={5}>
                            <TwitterTimelineEmbed lang="pl" noHeader noScrollbar transparent noFooter sourceType="profile" options={{ height: "550" }} screenName="orzechowski_mat"
                                placeholder={<Box rounded={10}>
                                    <Box padding='6'>
                                        <SkeletonCircle size='10' />
                                        <SkeletonText mt='4' noOfLines={7} spacing='4' />
                                    </Box>
                                    <Box padding='6'>
                                        <SkeletonCircle size='10' />
                                        <SkeletonText mt='4' noOfLines={5} spacing='4' />
                                    </Box>
                                </Box>}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Heading fontWeight={800} py={4}>Lorem ipsum dolor.</Heading>
                        <Box color={useColorModeValue("gray.500", "gray.300")} fontSize={'lg'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, explicabo dignissimos quod placeat quae eius velit doloremque cum ullam blanditiis tempore totam fuga odio! Delectus praesentium temporibus in eos voluptate dicta fugiat? Sit quidem aperiam dolorum neque cum inventore non ipsam, possimus officia ullam sint itaque distinctio! Porro pariatur rerum iste veniam dolorum officia consequatur. Magnam at facilis saepe modi, reprehenderit exercitationem suscipit veniam dolore ullam nostrum rerum tempore beatae, laborum possimus illo explicabo nulla quidem! Debitis laborum modi amet recusandae soluta sapiente distinctio tempora, tenetur omnis deserunt? Porro quia ipsum fuga sint quasi possimus, aliquid ab quaerat modi sed facere, temporibus ipsa laborum debitis nam eius quis voluptates in autem sunt nesciunt accusamus. Nemo esse asperiores voluptatum rerum nostrum adipisci porro, minima, inventore iste blanditiis neque quos ullam itaque suscipit eligendi qui voluptatibus ab maxime laborum? Fugit earum debitis consequuntur maiores rem illo minima voluptates rerum vitae incidunt officia culpa.
                        </Box>
                    </Box>
                </SimpleGrid>
            </Container>
    )
}
