import { Button, IconButton } from "@chakra-ui/react";
import { FaPeopleCarry } from "react-icons/fa";
import { Link } from "@chakra-ui/react";

interface MainButtonProps {
    children?: any;
    link?: any;
    icon: any;
    onClick?: any;
    ariaLabel?: any;
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
            icon={icon}/>
        </Link>
    );
}