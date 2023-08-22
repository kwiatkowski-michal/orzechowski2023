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
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc';

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
      _hover={{bgColor: "brand.200"}}
      transition={"0.5s"}
      boxShadow={'dark-lg'}
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.500')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md" color={"white"}>{heading}</Heading>
          <Text mt={1} color={"white"} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} color={"white"} rightIcon={<ExternalLinkIcon />} size={'sm'}>
          <Link>Zobacz więcej
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
        <Text color={useColorModeValue("black", "gray.300")} fontSize={'lg'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>
      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Heading'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  );
}