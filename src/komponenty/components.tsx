import { Box, Button, Card, CardBody, CardFooter, Divider, Flex, Heading, Icon, IconButton, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaPeopleCarry } from "react-icons/fa";
import { Link } from "@chakra-ui/react";
import { MdOpenInNew } from "react-icons/md";

interface MainButtonProps {
    children?: any;
    link?: any;
    icon: any;
    onClick?: any;
    ariaLabel?: any;
}

interface CardNewProps {
    children?: any;
    link?: any;
    image?: any;
    title: any;
    description: any;
    icon?: any;
}

export function MainButton({ children, link, icon, onClick }: MainButtonProps) {
    return (
        <Link target="_blank" href={link}>
            <Button
                onClick={onClick}
                leftIcon={icon}
                variant={"solid"}
                size={"lg"}
                rounded={0}
                color={"white"}
                bgColor={"brand.100"}
                _hover={{ bg: "brand.200" }}
            >
                {children}
            </Button>
        </Link>
    );
}

export function SocialButton({ link, icon, onClick, ariaLabel }: MainButtonProps) {
    return (
        <Link target="_blank" href={link}>
            <IconButton aria-label={ariaLabel} rounded={0} color={"brand.100"}
                bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white" }}
                icon={icon} />
        </Link>
    );
}

export function CardNew({ children, link, image, title, description, icon }: CardNewProps) {
    return (
        <>
            <Box bgColor={useColorModeValue("gray.100", "gray.900")} bgSize={"cover"} bgImage={image} bgRepeat="no-repeat" maxW={{ base: 'full', lg: '48.7%' }} w={'full'}>
                <Box >
                    {/* <Box bgRepeat="no-repeat"  h={250} bgSize={"cover"} bgImage={image}>
                    </Box> */}
                    <Stack spacing={3} align={'start'} padding={5}>
                        <Flex align="center">
                            {icon}
                            <Heading size={"md"}>{title}</Heading>
                        </Flex>
                        <Text>
                            {description}
                        </Text>
                        <Link target="_blank" href={link}><Button size={"sm"} rightIcon={<MdOpenInNew />} rounded={0} color="white" bgColor="brand.100" _hover={{ bgColor: "brand.200" }}>Dowód moich działań</Button></Link>
                    </Stack>
                </Box>

            </Box>
        </>
    )
}