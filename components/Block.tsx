import { x } from "@xstyled/emotion";

function Block({ children }: { children?: any }) {
    return (
        <x.div display="flex">
            <x.div
                bg="secondary"
                w="0.25rem"
                minW="0.25rem"
                maxW="0.25rem"
                mr="4"
            />
            <x.div>{children}</x.div>
        </x.div>
    );
}

export default Block;
