import { useColorMode, x } from "@xstyled/emotion";
import { FiMoon, FiSun } from "react-icons/fi";

function ColorModeSwitch() {
    const [colorMode, setColorMode] = useColorMode();

    return (
        <x.button
            onClick={() => {
                setColorMode(colorMode === "default" ? "dark" : "default");
            }}
            p="4"
            display="flex"
            bg="initial"
            color="text"
            borderColor="secondary"
            focusOutline="none"
            ring="2"
            ringColor="secondary"
            hoverBg="secondary"
            fontFamily="mono"
            fontWeight="bold"
        >
            {colorMode === "default" ? <FiMoon /> : <FiSun />}
            <x.div ml="2">
                {colorMode === "default" ? "Dark mode" : "Light mode"}
            </x.div>
        </x.button>
    );
}

export default ColorModeSwitch;
