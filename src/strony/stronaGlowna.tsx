import Navbar from "../komponenty/newNavbar";
import Hero from "../sekcje/Hero";
import FeaturesMain from "../sekcje/Opis";
import Values from "../sekcje/Program";
import ErrorPage from "./errror";

export default function StronaGlowna() {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturesMain />
            <Values />
        </>
    )
}