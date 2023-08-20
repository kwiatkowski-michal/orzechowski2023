import { Box, Button, Center, Container, Heading, Link, SimpleGrid, SkeletonCircle, SkeletonText, Text, useColorMode, useColorModeValue, useToast } from "@chakra-ui/react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import {useBreakpointValue} from '@chakra-ui/react';
import { useEffect } from "react";

export function TwitterButton() {
    return (
      <Center p={5}>
        <Link w={'full'} maxW={'md'} href="https://twitter.com/orzechowski_mat"><Button
          w={'full'}
          colorScheme={'twitter'}
        //   leftIcon={""}
        >
          <Center>
            <Text>Zaobserwuj mnie na X</Text>
          </Center>
        </Button></Link>
      </Center>
    );
  }

export default function SocialMedia() {
    const toast = useToast()
    const id = "cookie"
    useEffect(() => { 
        if (!toast.isActive(id)) {
        toast({
            id: id,
        title: 'Polityka prywatności',
        description: "Przeglądając stronę zgadzasz się na wykorzystanie plików cookies",
        status: 'info',
        variant: "solid",
        duration: 5000,
        position: 'bottom-right',
        isClosable: true,
      })
    }
    }, [])
    return (
      <Box bgColor={useColorModeValue('brand.300', 'black')}>
            <Container maxW={'5xl'} pb={10}>
                <SimpleGrid bgColor={useColorModeValue('brand.300', 'black')} columns={{ base: 1, md: 2 }} spacing={10}>
                    <Box py={5}>
                        <Heading fontWeight={700} pb={5}>
                            Najnowsze <Text as={'span'} position={'relative'}  _before={{ content: "''", width: "full", height: useBreakpointValue({ base: "20%", md: "30%" }), position: "absolute", bottom: 1, left: 0, bg: "brand.200", zIndex: -1 }}>posty</Text>
                        </Heading>
                        <Box>
                            <Box p={1} bgColor={"white"} shadow={"lg"}>
                            <TwitterTimelineEmbed lang="pl" noHeader noScrollbar noBorders noFooter sourceType="profile" options={{ height: "550" }} screenName="orzechowski_mat"
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
                            <TwitterButton />
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Heading fontWeight={700} py={4}>Lorem ipsum dolor.</Heading>
                        <Box color={useColorModeValue("gray.500", "gray.300")} fontSize={'lg'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, explicabo dignissimos quod placeat quae eius velit doloremque cum ullam blanditiis tempore totam fuga odio! Delectus praesentium temporibus in eos voluptate dicta fugiat? Sit quidem aperiam dolorum neque cum inventore non ipsam, possimus officia ullam sint itaque distinctio! Porro pariatur rerum iste veniam dolorum officia consequatur. Magnam at facilis saepe modi, reprehenderit exercitationem suscipit veniam dolore ullam nostrum rerum tempore beatae, laborum possimus illo explicabo nulla quidem! Debitis laborum modi amet recusandae soluta sapiente distinctio tempora, tenetur omnis deserunt? Porro quia ipsum fuga sint quasi possimus, aliquid ab quaerat modi sed facere, temporibus ipsa laborum debitis nam eius quis voluptates in autem sunt nesciunt accusamus. Nemo esse asperiores voluptatum rerum nostrum adipisci porro, minima, inventore iste blanditiis neque quos ullam itaque suscipit eligendi qui voluptatibus ab maxime laborum? Fugit earum debitis consequuntur maiores rem illo minima voluptates rerum vitae incidunt officia culpa.
                        </Box>
                    </Box>
                </SimpleGrid>
            </Container>
            </Box>
    )
}
