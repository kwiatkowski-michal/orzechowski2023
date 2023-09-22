import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Box,
  Show,
  Center,
  Wrap,
  WrapItem,
  Link,
  Button,
} from '@chakra-ui/react';
import { MdHowToVote, MdWhereToVote } from 'react-icons/md';
import { MainButton } from '../komponenty/components';


export default function FeaturesMain() {
  return (
    <Box>
      <Container maxW={'5xl'} pt={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading fontWeight={"bold"} id='kim-jestem' color={useColorModeValue("brand.100", "gray.000")}>Kim jestem?</Heading>
            <Text color={useColorModeValue("black", "gray.300")} fontSize={'lg'}>
              Jestem społecznikiem z <Text as={"span"} fontWeight={'800'}>Grudziądza</Text> i wiceprzewodniczącym Młodej Lewicy. Kandyduję z <Text as={"span"} fontWeight={'800'}>ostatniego miejsca na liście Lewicy</Text>, żeby stworzyć nam Polskę dla pokoleń. Państwo zielone, świeckie, otwarte i dla każdego - bez względu na grubość portfela. Pomóż mi w tej walce, <Text as={"span"} fontWeight={'800'}>zagłosuj na mnie!</Text>
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
              <Image src={useColorModeValue("/mapa.svg", "/mapa-dark.svg")} maxH={450} objectFit={'cover'} />
            </Center>
            <Stack spacing={4}>
              <Heading fontWeight={"bold"} id='glosowanie' color={useColorModeValue("brand.100", "gray.000")}>Jak głosować?</Heading>
              <Text color={useColorModeValue("black", "gray.300")} fontSize={'lg'}>
                W wyborach do Sejmu możesz oddać <Text as={"span"} fontWeight={'800'}>tylko jeden głos</Text>. Głosujesz na <Text as={"span"} fontWeight={'800'}>kandydata</Text>, a nie na partię. Wystarczy, że <Text as={"span"} fontWeight={'800'}>zaznaczysz mnie</Text> na karcie do głosowania. <Text as={"span"} fontWeight={'800'}>Nie musisz głosować na całą listę</Text> - wystarczy jeden krzyżyk przy moim nazwisku.
              </Text>
              <Wrap spacing={4} justify={{ base: 'center', md: 'left' }}>
                <WrapItem>
                  <MainButton link={'https://wybory.gov.pl'} icon={<MdWhereToVote/>}>Sprawdź swój okęg wyborczy</MainButton>
                </WrapItem>
                <WrapItem>
                <MainButton link={'https://www.gov.pl/web/gov/zmien-miejsce-glosowania'} icon={<MdHowToVote/>}>Zmień miejsce głosowania</MainButton>
                </WrapItem>
              </Wrap>
            </Stack>

          </SimpleGrid>

        </Box>
      </Container>
    </Box>
  );
}