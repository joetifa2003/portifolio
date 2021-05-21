import { x } from "@xstyled/emotion";

function Header({ title }: { title: string }) {
    return (
        <x.div display="flex" my="16" w="100%">
            <x.div
                flex="1"
                h="2"
                bg="secondary"
                my="auto"
                display={{ lg: "none" }}
            ></x.div>
            <x.div
                fontSize={{ xs: "3xl", md: "4xl", lg: "5xl" }}
                lineHeight={{ xs: "3xl", md: "4xl", lg: "5xl" }}
                fontFamily="mono"
                fontWeight="bold"
                mr="8"
                ml={{ xs: "8", lg: "0" }}
            >
                {title}
            </x.div>
            <x.div flex="1" h="2" bg="secondary" my="auto"></x.div>
        </x.div>
    );
}

export default Header;
