import { useColorMode, x } from "@xstyled/emotion";
import { memo, useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-scroll";

const routes = [
    {
        name: "Home",
        to: "home",
    },
    {
        name: "About",
        to: "about",
    },
    {
        name: "Contact me",
        to: "contact me",
    },
];

function Navbar() {
    const [isSidebarOpened, setSideBarOpend] = useState(false);
    const [colorMode] = useColorMode();

    return (
        <>
            <x.nav
                display="flex"
                position="fixed"
                top="0"
                left="0"
                w="100%"
                zIndex="20"
                backgroundColor="primary"
                borderBottomWidth="2"
                borderColor="secondary"
                h="var(--nav-height)"
                fontFamily="mono"
                overflow="hidden"
            >
                <x.div
                    container
                    m="auto"
                    row
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <x.div fontWeight="bold" fontSize="2xl" lineHeight="2xl">
                        <x.span display={{ xs: "none", md: "inline-block" }}>
                            <x.span color="secondary">const</x.span> name =
                        </x.span>{" "}
                        <x.span color="secondary-accent">"</x.span>
                        Youssef Ahmed
                        <x.span color="secondary-accent">"</x.span>
                    </x.div>
                    <x.div
                        display={{ xs: "none", lg: "flex" }}
                        mx="-4"
                        fontSize="xl"
                        lineHeight="xl"
                        alignItems="center"
                    >
                        {routes.map((route, i) => (
                            <x.div
                                key={i}
                                hoverColor="secondary"
                                cursor="pointer"
                                px="4"
                                textAlign="center"
                            >
                                <Link
                                    to={route.to}
                                    activeClass="link-active"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={0}
                                >
                                    {route.name}
                                </Link>
                            </x.div>
                        ))}
                    </x.div>
                    <x.div display={{ xs: "block", lg: "none" }} zIndex="40">
                        <HamburgerMenu
                            isOpen={isSidebarOpened}
                            color={colorMode === "default" ? "#000" : "#fff"}
                            menuClicked={() => {
                                setSideBarOpend((prev) => !prev);
                            }}
                        />
                    </x.div>
                </x.div>
            </x.nav>
            <x.div
                opacity={isSidebarOpened ? 1 : 0}
                position="fixed"
                top="var(--nav-height)"
                right="0"
                h="calc(100vh - var(--nav-height))"
                w="100%"
                transition="all"
                transitionDuration="500"
                bg="primary-overlay"
                zIndex={isSidebarOpened ? "30" : "-1"}
                onClick={() => setSideBarOpend((prev) => !prev)}
            ></x.div>
            <x.aside
                display="flex"
                flexDirection="column"
                position="fixed"
                top="var(--nav-height)"
                right="0"
                h="calc(100vh - var(--nav-height))"
                w="70%"
                bg="primary-overlay"
                zIndex="30"
                transition="all"
                transitionDuration="500"
                transform
                translateX={isSidebarOpened ? "0" : "100%"}
                borderLeftWidth="4"
                borderColor="secondary"
                boxShadow="lg"
                py="4"
                style={{
                    backdropFilter: "blur(16px)",
                }}
            >
                <x.div my="-2">
                    {routes.map((route, index) => (
                        <x.div
                            key={index}
                            py="2"
                            textAlign="center"
                            fontWeight="bold"
                            fontSize="3xl"
                            lineHeight="3xl"
                        >
                            {route.name}
                        </x.div>
                    ))}
                </x.div>
            </x.aside>
        </>
    );
}

export default memo(Navbar);
