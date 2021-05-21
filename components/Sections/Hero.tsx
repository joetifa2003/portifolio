import { x } from "@xstyled/emotion";
import Block from "components/Block";
import ColorModeSwitch from "components/ColorModeSwitch";
import Section from "components/Section";
import ScrollAnimation from "react-animate-on-scroll";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

function Hero() {
    const one = (
        <x.div fontSize="2xl" lineHeight="2xl" fontFamily="mono">
            Hi, my name is
        </x.div>
    );

    const two = (
        <x.h1
            fontSize={{ xs: "5xl", lg: "6xl" }}
            lineHeight={{ xs: "5xl", lg: "6xl" }}
        >
            Youssef Ahmed
        </x.h1>
    );

    const three = (
        <x.h2
            fontSize={{ xs: "4xl", lg: "6xl" }}
            lineHeight={{ xs: "4xl", lg: "6xl" }}
            color="secondary"
        >
            I build things for the web.
        </x.h2>
    );

    const four = (
        <x.p
            fontSize={{ xs: "3xl", lg: "4xl" }}
            lineHeight={{ xs: "3xl", lg: "4xl" }}
            color="secondary"
        >
            I’m a full stack web devolper from Egypt that loves javascript.
        </x.p>
    );

    const five = (
        <x.div mt="8">
            <ColorModeSwitch />
        </x.div>
    );

    const six = (
        <x.button
            fontSize="2xl"
            lineHeight="2xl"
            fontWeight="bold"
            fontFamily="mono"
            color="text"
            py="4"
            px="4"
            bg="initial"
            hoverBg="secondary"
            focusOutline="none"
            ring="2"
            ringColor="secondary"
            mt="8"
            mb="2px"
        >
            Get in touch
        </x.button>
    );

    const socialMedias = [
        {
            icon: <AiFillFacebook size="32" />,
            onClick: () => {
                alert("test");
            },
        },
        {
            icon: <AiFillInstagram size="32" />,
            onClick: () => {
                alert("test");
            },
        },
        {
            icon: <FaDiscord size="32" />,
            onClick: () => {
                alert("test");
            },
        },
    ];

    return (
        <Section fullscreen name="home">
            <x.div
                display="grid"
                gridTemplateColumns={{ xs: "1fr", lg: "8fr 4fr" }}
                gap={8}
                alignItems="center"
            >
                <x.div order={{ xs: 2, lg: 1 }}>
                    <Block>
                        <x.div fontWeight="bold">
                            {[one, two, three, four, five, six].map(
                                (item, index) => (
                                    <ScrollAnimation
                                        key={index}
                                        animateIn="text-focus-in"
                                        animateOnce
                                        duration={0.5}
                                    >
                                        {item}
                                    </ScrollAnimation>
                                )
                            )}
                        </x.div>
                    </Block>
                    <x.div mt="8">
                        <Block>
                            <x.div my="-1">
                                {socialMedias.map((item, index) => (
                                    <x.div key={index} py="1">
                                        {item.icon}
                                    </x.div>
                                ))}
                            </x.div>
                        </Block>
                    </x.div>
                </x.div>
                <x.div order={{ xs: 1, lg: 2 }}>
                    <img src="/images/logo.svg" alt="" width="100%" />
                </x.div>
            </x.div>
        </Section>
    );
}

export default Hero;
