import { x } from "@xstyled/emotion";
import Navbar from "components/Navbar";
import About from "components/Sections/About";
import ContactMe from "components/Sections/ContactMe";
import Hero from "components/Sections/Hero";

function Index() {
    return (
        <x.div>
            <Navbar />
            <Hero />
            <About />
            <ContactMe />
        </x.div>
    );
}

export default Index;
