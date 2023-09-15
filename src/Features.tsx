import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  useBreakpointValue,
  Box,
  Show,
  Img,
  Center,
} from '@chakra-ui/react';
export default function FeaturesMain() {
  return (
    <Box>
      <Container maxW={'5xl'} pt={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading fontWeight={"bold"} id='kim-jestem' color={useColorModeValue("brand.100", "gray.000")}>Kim jestem?</Heading>
            <Text color={useColorModeValue("black", "gray.300")} fontSize={'lg'}>
              Jestem społecznikiem z <Text as={"span"} fontWeight={'800'}>Grudziądza</Text> i wiceprzewodni-czącym Młodej Lewicy. Kandyduję z <Text as={"span"} fontWeight={'800'}>ostatniego miejsca na liście Lewicy</Text>, żeby stworzyć nam Polskę dla pokoleń. Państwo zielone, świeckie, otwarte i dla każdego - bez względu na grubość portfela. Pomóż mi w tej walce, <Text as={"span"} fontWeight={'800'}>zagłosuj na mnie!</Text>
            </Text>
          </Stack>
          <Show above="md">
            <Flex boxShadow={"dark-lg"}>
              <Image alt={'Mateusz Orzechowski'} src={'/image1.jpeg'} objectFit={'cover'} />
            </Flex>
          </Show>
        </SimpleGrid>
        <Box py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} content='center' spacing={10}>
            <Center>
              <Image src={'/mapa.svg'} maxH={450} objectFit={'cover'}/>
            </Center>
            <Stack spacing={4}>
              <Heading fontWeight={"bold"} id='jak-glosowac' color={useColorModeValue("brand.100", "gray.000")}>Jak głosować?</Heading>
              <Text color={useColorModeValue("black", "gray.300")} fontSize={'lg'}>
                W wyborach do Sejmu możesz oddać <Text as={"span"} fontWeight={'800'}>tylko jeden głos</Text>. Głosujesz na <Text as={"span"} fontWeight={'800'}>kandydata</Text>, a nie na partię. Wystarczy, że <Text as={"span"} fontWeight={'800'}>zaznaczysz mnie</Text> na karcie do głosowania. <Text as={"span"} fontWeight={'800'}>Nie musisz głosować na całą listę</Text> - wystarczy jeden krzyżyk przy moim nazwisku.
              </Text>
            </Stack>

          </SimpleGrid>

        </Box>
      </Container>
    </Box>
  );
}