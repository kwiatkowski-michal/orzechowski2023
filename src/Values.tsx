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
      maxW={{ base: 'full', lg: '48.7%' }}
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
        <Link target='_blank' href={href}><Button rounded={0} bgColor={useColorModeValue('brand.200', 'brand.100')} _hover={{backgroundColor: useColorModeValue('brand.200', 'brand.100'), boxShadow: "4px 4px 0px 2px #f6e9e5"}} color={"white"} rightIcon={<ExternalLinkIcon />} size={'sm'}>
          Dowód moich działań
          
        </Button></Link>
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
      </Stack>
      <Container maxW={'5xl'} mt={5}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Psycholog w każdej szkole'}
            icon={<Icon as={FaBrain} w={10} h={10} />}
            description={
              'Polska bije niechlubne rekordy jeśli chodzi o samobójstwa dzieci i młodzieży - musimy powiedzieć temu dość! Pora wprowadzić psychologa do każdej szkoły, który zapewni uczniom i uczennicom podstawową pomoc.'
            }
            href={'https://tylkotorun.pl/opinie/ilu-jeszcze-moich-znajomych-musi-odebrac-sobie-zycie-felieton/'}
          />
          <Card
            heading={'Powołanie Funduszu Kruszenia Betonu'}
            icon={<Icon as={FaHammer} w={10} h={10} />}
            description={
              'Czas skończyć z betonozą w naszych miastach! Chcemy je zazielenić, tak jak zrobiliśmy to w Grudziądzu, gdzie w ramach inicjatywy lokalnej posadziliśmy drzewa i rośliny na ulicy Małogroblowej, Bydgoskiej i Łęgi, a w ostatnim czasie posadziliśmy dwie dorodne lipy na ulicy Portowej. Fundusz opiewający na kwotę 3 miliardów złotych wesprze samorządy w walce o zieleń miejską.'
            }
            href={'https://pomorska.pl/w-trosce-o-srodowisko-lewica-w-grudziadzu-posadzila-dwie-dorodne-lipy/ar/c1-17889551'}
          />
          <Card
            heading={'Zakaz bezpłatnych staży'}
            icon={<Icon as={FaMoneyBill} w={10} h={10} />}
            description={
              'Jak praca to płaca! Młodzi pracownicy to nie niewolnicy i zasługują na godną płacę za wykonywany staż. Musimy skończyć z darmowymi praktykami i stażami i nakazać pracodawcy wypłacenie minimalnej stawki godzinowej za każdą przepracowaną godzinę.'
            }
            href={'https://tylkotorun.pl/opinie/orzechowski-mloda-lewica-walczy-o-wasze-prawa/'}
          />
          <Card
            heading={'Prawa kobiet i osób LGBTQ+'}
            icon={<Icon as={FaEquals} w={10} h={10} />}
            description={
              'Prawa człowieka nie mogą być przedmiotem walki politycznej. Czas zagwarantować prawo do legalnej aborcji do 12 tygodnia ciąży, państwowy program in vitro, a także równość małżeńską i ucywilizowanie procesu korekty płci. Zawsze będę stał po stronie kobiet i osób wykluczonych.'
            }
            href={'https://grudziadz.naszemiasto.pl/protest-jestesmy-ludzmi-nie-ideologia-w-grudziadzu-zdjecia/ar/c1-7765474'}
          />
          <Card
            heading={'Autobus w każdej gminie, pociąg w każdym powiecie'}
            icon={<Icon as={FaBus} w={10} h={10} />}
            description={
              'Moim celem jest zapewnienie dostępu do transportu publicznego na poziomie gminnym i powiatowym, z autobusami docierającymi do każdej gminy i pociągami dostępnymi w każdym powiecie. Jednocześnie, chcę wprowadzenia biletu na komunikację zbiorową w kraju za 59zł.'
            }
            href={'https://www.eska.pl/torun/w-toruniu-krytykuja-podwyzki-cen-mloda-lewica-nie-zostawia-suchej-nitki-na-polityce-wladz-miejskich-aa-yo2R-HqjT-pgZM.html'}
          />
          <Card
            heading={'Pora na Bydgoski Park Narodowy!'}
            icon={<Icon as={FaLeaf} w={10} h={10} />}
            description={
              'Ostatni Park Narodowy powstał… ponad 20 lat temu! Polska ma tereny, które warto i które trzeba chronić. Jednym z nich jest teren Puszczy Bydgoskiej, z której należy wydzielić Bydgoski Park Narodowy.'
            }
            href={'https://grudziadz365.pl/pl/11_wiadomosci/84095_chcemy-lasu-nie-tartaku---panel-dyskusyjny-w-grudziadzu.html'}
          />
        </Flex>
      </Container>
    </Box>
  );
}