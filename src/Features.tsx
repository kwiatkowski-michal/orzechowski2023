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
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { FaEquals, FaHandshake, FaHandPeace } from 'react-icons/fa';
interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function FeaturesMain() {
  return (
    <Box bgColor={useColorModeValue("brand.300", "black")}>
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading fontWeight={700} color={useColorModeValue("brand.200", "gray.000")}>Moje 
            wartości</Heading>
          <Text color={useColorModeValue("brand.200", "gray.300")} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('brand.200', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={FaHandshake} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Wolność'}
            />
            <Feature
              icon={<Icon as={FaEquals} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Równość'}
            />
            <Feature
              icon={
                <Icon as={FaHandPeace} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Demokracja'}
            />
          </Stack>
        </Stack>
        <Flex boxShadow={"xl"}>
          <Image

            alt={'Mateusz Orzechowski'}
            src={
              '/image1.jpeg'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
    </Box>
  );
}