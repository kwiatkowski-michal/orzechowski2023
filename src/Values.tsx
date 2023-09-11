import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { FaBrain, FaBus, FaEquals, FaHammer, FaLeaf, FaMoneyBill } from 'react-icons/fa';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '314px' }}
      w={'full'}
      bg={useColorModeValue('brand.100', 'gray.900')}
      _hover={{bgColor: useColorModeValue('brand.100', 'brand.200')}}
      transition={"0.3s"}
      boxShadow={'dark-lg'}
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={useColorModeValue('white', 'white')}
          rounded={'full'}
          bg={useColorModeValue('brand.200', 'brand.100')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md" color={"white"}>{heading}</Heading>
          <Text mt={1} color={"white"} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} color={"white"} rightIcon={<ExternalLinkIcon />} size={'sm'}>
          <Link target='_blank' href={href}>Dowód moich działań
          </Link>
        </Button>
      </Stack>
    </Box>
  );
};



export default function Values() {
  return (
    <Box py={7} bgColor={useColorModeValue('white', 'black')}>
      <Stack spacing={4} as={Container} maxW={'5xl'}>
        <Heading fontWeight={700} id='postulaty' color={useColorModeValue('brand.100', 'white')}>Najważniejsze
            postulaty
        </Heading>
        {/* <Text color={useColorModeValue("black", "gray.300")} fontSize={'lg'}>
        Kandyduję z ostatniego miejsca na liście komitetu wyborczego Nowej Lewicy, żeby walczyć o Polskę otwartą, zieloną, świecką i dla każdego - bez względu na grubość portfela.
        </Text> */}
      </Stack>
      <Container maxW={'5xl'} mt={5}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Psycholog w każdej szkole'}
            icon={<Icon as={FaBrain} w={10} h={10} />}
            description={
              'Postuluję wprowadzenie standardu opieki psychologicznej w polskich szkołach. Działając jako aktywista, angażowałem się w działania na rzecz zdrowia psychicznego młodzieży, takie jak organizacja Okrągłych Stołów.'
            }
            href={'https://torun.wyborcza.pl/torun/7,48723,28525750,mateusz-orzechowski-z-mlodej-lewicy-czas-by-oddac-glos-mlodym.html'}
          />
          <Card
            heading={'Utworzenie Bydgoskiego Parku Narodowego'}
            icon={<Icon as={FaLeaf} w={10} h={10} />}
            description={
              'Ostatni park narodowy powstał ponad 20 lat temu - czas to zmienić i utworzyć nowe parki narodowe, w tym Bydgoski Park Narodowy. Ponadto, wraz z Młodą Lewicą organizowałem panele dyskusyjne i okrągłe stoły o sytuacji lasów w Polsce.'
            }
            href={'https://grudziadz365.pl/pl/11_wiadomosci/84095_chcemy-lasu-nie-tartaku---panel-dyskusyjny-w-grudziadzu.html'}
          />
          <Card
            heading={'Prawa kobiet i osób LGBTQ+'}
            icon={<Icon as={FaEquals} w={10} h={10} />}
            description={
              'Dążę do wprowadzenia w Polsce rozwiązań równościowych na wzór krajów Unii Europejskiej, które gwarantują prawa kobiet i osób LGBTQ+. Chcę, aby nasz kraj w końcu stał po cywilizowanej stronie Europy.'
            }
            href={'#'}
          />
          <Card
            heading={'Autobus w każdej gminie, pociąg w każdym powiecie'}
            icon={<Icon as={FaBus} w={10} h={10} />}
            description={
              'Moim celem jest zapewnienie dostępu do transportu publicznego na poziomie gminnym i powiatowym, z autobusami docierającymi do każdej gminy i pociągami dostępnymi w każdym powiecie. Jednocześnie, chcę wprowadzenia biletu na komunikację zbiorową w kraju za 59zł.'
            }
            href={'#'}
          />
          <Card
            heading={'Powołanie Funduszu Kruszenia Betonu'}
            icon={<Icon as={FaHammer} w={10} h={10} />}
            description={
              'Chcemy utworzenia Funduszu Kruszenia Betonu, który będzie wspierał inwestycje w rozwój infrastruktury i budowę, przyczyniając się to usuwania “betonozy” z miast'
            }
            href={'#'}
          />
          <Card
            heading={'Zakaz bezpłatnych staży'}
            icon={<Icon as={FaMoneyBill} w={10} h={10} />}
            description={
              'Moim celem jest wprowadzenie zakazu bezpłatnych staży, aby zapewnić uczestnikom staży, często studentom, godziwe wynagrodzenie za ich pracę.'
            }
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  );
}