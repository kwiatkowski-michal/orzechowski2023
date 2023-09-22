import { Box, Heading, Link, Text, useColorModeValue, Button, ButtonGroup } from "@chakra-ui/react";
import { MdHomeFilled } from "react-icons/md";
import { MainButton } from "../komponenty/components";

export default function ErrorPage() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            minH={"100vh"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Heading>Błąd!</Heading>
            <Text mb={3}>Strona nie istnieje</Text>
            <MainButton icon={<MdHomeFilled/>} onClick={() => window.location.href = "/"}>Wróć na stronę główną</MainButton>
        </Box>
    );
}